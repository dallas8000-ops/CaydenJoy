export type ProgressEventType = 'communication' | 'activity' | 'safety';

export interface ProgressEvent {
  id: string;
  type: ProgressEventType;
  label: string;
  detail: string;
  createdAt: number;
}

export interface ProgressSummary {
  totalEvents: number;
  todayEvents: number;
  topLabels: Array<{ label: string; count: number }>;
  typeCounts: Record<ProgressEventType, number>;
  recentEvents: ProgressEvent[];
}

const STORAGE_KEY = 'caydenjoy_progress_events';
const MAX_EVENTS = 500;

export class ProgressManager {
  private static instance: ProgressManager;

  static getInstance(): ProgressManager {
    if (!ProgressManager.instance) {
      ProgressManager.instance = new ProgressManager();
    }
    return ProgressManager.instance;
  }

  log(type: ProgressEventType, label: string, detail: string = ''): void {
    const event: ProgressEvent = {
      id: `event_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      type,
      label,
      detail,
      createdAt: Date.now(),
    };

    const events = [event, ...this.getEvents()].slice(0, MAX_EVENTS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  }

  getEvents(): ProgressEvent[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Could not load progress events:', error);
      return [];
    }
  }

  getSummary(): ProgressSummary {
    const events = this.getEvents();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const labelCounts = new Map<string, number>();
    const typeCounts: Record<ProgressEventType, number> = {
      communication: 0,
      activity: 0,
      safety: 0,
    };

    events.forEach((event) => {
      labelCounts.set(event.label, (labelCounts.get(event.label) ?? 0) + 1);
      typeCounts[event.type] += 1;
    });

    return {
      totalEvents: events.length,
      todayEvents: events.filter((event) => event.createdAt >= todayStart.getTime()).length,
      topLabels: [...labelCounts.entries()]
        .map(([label, count]) => ({ label, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 8),
      typeCounts,
      recentEvents: events.slice(0, 12),
    };
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
}

export default ProgressManager.getInstance();
