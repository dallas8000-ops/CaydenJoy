export type FeedbackType = 'improvement' | 'wishlist' | 'bug' | 'success';

export interface FeedbackItem {
  id: string;
  type: FeedbackType;
  title: string;
  details: string;
  contact: string;
  createdAt: number;
}

const STORAGE_KEY = 'caydenjoy_feedback_items';
const MAX_ITEMS = 200;

export class FeedbackManager {
  private static instance: FeedbackManager;

  static getInstance(): FeedbackManager {
    if (!FeedbackManager.instance) {
      FeedbackManager.instance = new FeedbackManager();
    }
    return FeedbackManager.instance;
  }

  getItems(): FeedbackItem[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Could not load feedback:', error);
      return [];
    }
  }

  addItem(type: FeedbackType, title: string, details: string, contact: string): FeedbackItem {
    const item: FeedbackItem = {
      id: `feedback_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      type,
      title,
      details,
      contact,
      createdAt: Date.now(),
    };

    const items = [item, ...this.getItems()].slice(0, MAX_ITEMS);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    return item;
  }

  deleteItem(id: string): void {
    const items = this.getItems().filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }

  clear(): void {
    localStorage.removeItem(STORAGE_KEY);
  }

  exportData(): string {
    return JSON.stringify(this.getItems(), null, 2);
  }
}

export default FeedbackManager.getInstance();
