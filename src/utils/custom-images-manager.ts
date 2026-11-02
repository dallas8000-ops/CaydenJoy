/**
 * Custom Images Manager
 * Handles storage and retrieval of user-uploaded custom images
 */

export interface CustomImage {
  id: string;
  category: string; // 'foods', 'colors', 'places', 'family', etc.
  name: string;
  dataUrl: string; // Base64 encoded image
  uploadedAt: number;
  /** Optional one-line fact spoken after a wrong pick in the learning games ("A cup is for drinking."). Not used for family photos. */
  fact?: string;
  /** The name means more than one ("shoes"), so the app says "Those are shoes". */
  plural?: boolean;
}

export interface CustomImageDetails {
  fact?: string;
  plural?: boolean;
}

const MAX_FACT_LENGTH = 120;

function cleanDetails(details: CustomImageDetails = {}): CustomImageDetails {
  const fact = (details.fact ?? '').replace(/\s+/g, ' ').trim().slice(0, MAX_FACT_LENGTH);
  return { fact: fact || undefined, plural: details.plural ? true : undefined };
}

const CUSTOM_IMAGES_KEY = 'caydenjoy_custom_images';
const MAX_IMAGES = 50;
const MAX_IMAGE_SIZE = 500 * 1024; // 500KB per image

export class CustomImagesManager {
  private static instance: CustomImagesManager;

  private constructor() {
    this.initStorage();
  }

  static getInstance(): CustomImagesManager {
    if (!CustomImagesManager.instance) {
      CustomImagesManager.instance = new CustomImagesManager();
    }
    return CustomImagesManager.instance;
  }

  private initStorage(): void {
    try {
      const stored = localStorage.getItem(CUSTOM_IMAGES_KEY);
      if (!stored) {
        localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify([]));
      }
    } catch (e) {
      console.error('Error initializing custom images storage:', e);
    }
  }

  private getImages(): CustomImage[] {
    try {
      const stored = localStorage.getItem(CUSTOM_IMAGES_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error('Error loading custom images:', e);
      return [];
    }
  }

  private saveImages(images: CustomImage[]): void {
    try {
      localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify(images));
    } catch (e) {
      console.error('Error saving custom images:', e);
      // Handle storage quota exceeded
      if (e instanceof DOMException && e.name === 'QuotaExceededError') {
        this.handleStorageQuotaExceeded();
      }
    }
  }

  private handleStorageQuotaExceeded(): void {
    console.warn('Storage quota exceeded. Removing oldest images.');
    const images = this.getImages();
    if (images.length > 0) {
      images.sort((a, b) => a.uploadedAt - b.uploadedAt);
      // Remove oldest 5 images
      images.splice(0, 5);
      this.saveImages(images);
    }
  }

  addImage(category: string, name: string, dataUrl: string, details: CustomImageDetails = {}): CustomImage | null {
    try {
      // Validate
      if (!category || !name || !dataUrl) {
        throw new Error('Missing required fields');
      }

      if (dataUrl.length > MAX_IMAGE_SIZE) {
        throw new Error(`Image too large. Maximum size: ${MAX_IMAGE_SIZE / 1024}KB`);
      }

      const images = this.getImages();

      // Check limit
      if (images.length >= MAX_IMAGES) {
        throw new Error(`Maximum ${MAX_IMAGES} images reached`);
      }

      const newImage: CustomImage = {
        id: `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        category,
        name,
        dataUrl,
        uploadedAt: Date.now(),
        ...cleanDetails(details),
      };

      images.push(newImage);
      this.saveImages(images);
      return newImage;
    } catch (e) {
      console.error('Error adding custom image:', e);
      return null;
    }
  }

  getImagesByCategory(category: string): CustomImage[] {
    return this.getImages().filter(img => img.category === category);
  }

  getImage(id: string): CustomImage | undefined {
    return this.getImages().find(img => img.id === id);
  }

  getAllImages(): CustomImage[] {
    return this.getImages();
  }

  updateImage(id: string, name: string): boolean {
    try {
      const images = this.getImages();
      const image = images.find(img => img.id === id);
      if (image) {
        image.name = name;
        this.saveImages(images);
        return true;
      }
      return false;
    } catch (e) {
      console.error('Error updating image:', e);
      return false;
    }
  }

  /** Set or clear the spoken fact and plural flag on an existing photo. */
  updateDetails(id: string, details: CustomImageDetails): boolean {
    try {
      const images = this.getImages();
      const image = images.find(img => img.id === id);
      if (!image) return false;
      const clean = cleanDetails(details);
      image.fact = clean.fact;
      image.plural = clean.plural;
      this.saveImages(images);
      return true;
    } catch (e) {
      console.error('Error updating image details:', e);
      return false;
    }
  }

  deleteImage(id: string): boolean {
    try {
      const images = this.getImages().filter(img => img.id !== id);
      this.saveImages(images);
      return true;
    } catch (e) {
      console.error('Error deleting image:', e);
      return false;
    }
  }

  deleteByCategory(category: string): boolean {
    try {
      const images = this.getImages().filter(img => img.category !== category);
      this.saveImages(images);
      return true;
    } catch (e) {
      console.error('Error deleting images by category:', e);
      return false;
    }
  }

  getStorageInfo(): { used: number; max: number; percentage: number } {
    const images = this.getImages();
    const used = images.reduce((sum, img) => sum + img.dataUrl.length, 0);
    const max = 5 * 1024 * 1024; // 5MB limit
    return {
      used,
      max,
      percentage: Math.round((used / max) * 100)
    };
  }

  clearAll(): boolean {
    try {
      localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify([]));
      return true;
    } catch (e) {
      console.error('Error clearing images:', e);
      return false;
    }
  }

  exportData(): string {
    return JSON.stringify(this.getImages());
  }

  importData(data: string): boolean {
    try {
      const images = JSON.parse(data);
      if (Array.isArray(images)) {
        this.saveImages(images);
        return true;
      }
      return false;
    } catch (e) {
      console.error('Error importing images:', e);
      return false;
    }
  }
}

export default CustomImagesManager.getInstance();
