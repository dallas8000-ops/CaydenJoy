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

  addImage(category: string, name: string, dataUrl: string): CustomImage | null {
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
        uploadedAt: Date.now()
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
