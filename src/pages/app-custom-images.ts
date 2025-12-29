import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PremiumManager } from '../utils/premium-manager';
import { CustomImagesManager, CustomImage } from '../utils/custom-images-manager';

@customElement('app-custom-images')
export class CustomImages extends LitElement {
  @state() selectedCategory = 'foods';
  @state() selectedFile: File | null = null;
  @state() imageName = '';
  @state() images: CustomImage[] = [];
  @state() isPremium = false;
  @state() storageInfo = { used: 0, max: 0, percentage: 0 };
  @state() uploadMessage = '';

  private premiumManager = PremiumManager.getInstance();
  private imagesManager = CustomImagesManager.getInstance();
  private fileInputRef: HTMLInputElement | null = null;

  static styles = css`
    :host {
      display: block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, sans-serif;
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      padding: 30px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    h1 {
      color: #333;
      margin-top: 0;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .premium-badge {
      background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .locked-message {
      background: #fff3cd;
      border: 2px solid #ffc107;
      border-radius: 12px;
      padding: 20px;
      color: #856404;
      text-align: center;
      margin: 20px 0;
    }

    .locked-message a {
      color: #667eea;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
    }

    .upload-section {
      background: #f8f9fa;
      border: 2px dashed #667eea;
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
      text-align: center;
    }

    .category-select {
      width: 100%;
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
      margin: 10px 0;
      cursor: pointer;
      font-family: inherit;
    }

    .name-input {
      width: 100%;
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 8px;
      font-size: 16px;
      margin: 10px 0;
      font-family: inherit;
    }

    .file-input-wrapper {
      position: relative;
      margin: 15px 0;
    }

    .file-input-label {
      display: inline-block;
      padding: 12px 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .file-input-label:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
    }

    .file-input-hidden {
      display: none;
    }

    .file-name {
      color: #666;
      margin-top: 10px;
      font-size: 14px;
    }

    .preview {
      max-width: 200px;
      max-height: 200px;
      border-radius: 8px;
      margin: 15px auto;
      display: block;
      border: 2px solid #ddd;
    }

    .button-group {
      display: flex;
      gap: 10px;
      justify-content: center;
      margin: 20px 0;
      flex-wrap: wrap;
    }

    .btn {
      padding: 12px 24px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.3s;
      font-family: inherit;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
    }

    .btn-primary:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-secondary {
      background: #e0e0e0;
      color: #333;
    }

    .btn-secondary:hover {
      background: #d0d0d0;
    }

    .btn-danger {
      background: #ff6b6b;
      color: white;
    }

    .btn-danger:hover {
      background: #ff5252;
    }

    .message {
      padding: 15px;
      border-radius: 8px;
      margin: 15px 0;
      text-align: center;
      font-weight: bold;
    }

    .message.success {
      background: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .message.error {
      background: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }

    .images-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }

    .image-card {
      background: #f8f9fa;
      border: 2px solid #e0e0e0;
      border-radius: 12px;
      padding: 10px;
      text-align: center;
      transition: all 0.3s;
    }

    .image-card:hover {
      border-color: #667eea;
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.2);
    }

    .image-card img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 10px;
    }

    .image-card-name {
      font-size: 14px;
      font-weight: bold;
      color: #333;
      margin-bottom: 8px;
      word-break: break-word;
    }

    .image-card-actions {
      display: flex;
      gap: 5px;
      justify-content: center;
    }

    .image-card-actions button {
      flex: 1;
      padding: 6px;
      font-size: 12px;
      cursor: pointer;
      border: none;
      border-radius: 6px;
    }

    .delete-btn {
      background: #ff6b6b;
      color: white;
    }

    .delete-btn:hover {
      background: #ff5252;
    }

    .storage-info {
      background: #e3f2fd;
      border-left: 4px solid #2196f3;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
    }

    .storage-bar {
      width: 100%;
      height: 20px;
      background: #ddd;
      border-radius: 10px;
      overflow: hidden;
      margin: 10px 0;
    }

    .storage-fill {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      transition: width 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 12px;
      font-weight: bold;
    }

    .category-images {
      margin-bottom: 30px;
    }

    .category-title {
      font-size: 18px;
      font-weight: bold;
      color: #667eea;
      margin: 20px 0 10px 0;
      padding-bottom: 10px;
      border-bottom: 2px solid #667eea;
    }

    .empty-message {
      text-align: center;
      color: #999;
      padding: 20px;
      font-style: italic;
    }
  `;

  connectedCallback(): void {
    super.connectedCallback();
    this.checkPremium();
    this.loadImages();
  }

  private checkPremium(): void {
    this.isPremium = this.premiumManager.canUseCustomImages();
  }

  private loadImages(): void {
    this.images = this.imagesManager.getAllImages();
    this.storageInfo = this.imagesManager.getStorageInfo();
  }

  private onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        this.uploadMessage = 'Please select an image file';
        return;
      }

      // Validate file size
      if (file.size > 500 * 1024) {
        this.uploadMessage = 'Image must be smaller than 500KB';
        return;
      }

      this.selectedFile = file;
      this.uploadMessage = '';
    }
  }

  private readFileAsDataUrl(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  private async uploadImage(): Promise<void> {
    if (!this.selectedFile || !this.imageName) {
      this.uploadMessage = 'Please select an image and enter a name';
      return;
    }

    try {
      const dataUrl = await this.readFileAsDataUrl(this.selectedFile);
      const result = this.imagesManager.addImage(
        this.selectedCategory,
        this.imageName,
        dataUrl
      );

      if (result) {
        this.uploadMessage = `✅ Image "${this.imageName}" uploaded successfully!`;
        this.selectedFile = null;
        this.imageName = '';
        this.selectedCategory = 'foods';
        if (this.fileInputRef) {
          this.fileInputRef.value = '';
        }
        this.loadImages();

        // Clear message after 3 seconds
        setTimeout(() => {
          this.uploadMessage = '';
        }, 3000);
      } else {
        this.uploadMessage = '❌ Failed to upload image';
      }
    } catch (error) {
      this.uploadMessage = `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
  }

  private deleteImage(id: string): void {
    if (confirm('Delete this image?')) {
      this.imagesManager.deleteImage(id);
      this.loadImages();
    }
  }

  private deleteCategory(): void {
    if (confirm(`Delete all images in ${this.selectedCategory}?`)) {
      this.imagesManager.deleteByCategory(this.selectedCategory);
      this.loadImages();
    }
  }

  private clearAll(): void {
    if (confirm('Delete ALL custom images? This cannot be undone.')) {
      this.imagesManager.clearAll();
      this.loadImages();
      this.uploadMessage = '✅ All images cleared';
      setTimeout(() => {
        this.uploadMessage = '';
      }, 2000);
    }
  }

  private goToPremium(): void {
    window.location.hash = '#/premium';
  }

  render() {
    const categoryImages = this.imagesManager.getImagesByCategory(this.selectedCategory);

    return html`
      <div class="container">
        <h1>
          🖼️ Custom Images
          ${this.isPremium ? html`<span class="premium-badge">Premium</span>` : ''}
        </h1>

        ${!this.isPremium
          ? html`
              <div class="locked-message">
                <p>🔒 Custom image uploads are a premium feature</p>
                <p>Unlock this feature for just <strong>$5.99</strong></p>
                <button class="btn btn-primary" @click="${this.goToPremium}">
                  Upgrade to Premium
                </button>
              </div>
            `
          : html`
              <div class="upload-section">
                <h2>📸 Upload New Image</h2>

                <label>Category:</label>
                <select class="category-select" @change="${(e: Event) => {
                  this.selectedCategory = (e.target as HTMLSelectElement).value;
                }}">
                  <option value="foods">Foods</option>
                  <option value="colors">Colors</option>
                  <option value="places">Places</option>
                  <option value="family">Family</option>
                  <option value="activities">Activities</option>
                  <option value="other">Other</option>
                </select>

                <label>Image Name:</label>
                <input
                  type="text"
                  class="name-input"
                  placeholder="e.g., Daddy's Pizza"
                  .value="${this.imageName}"
                  @input="${(e: Event) => {
                    this.imageName = (e.target as HTMLInputElement).value;
                  }}"
                />

                <div class="file-input-wrapper">
                  <label class="file-input-label">📁 Choose Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    class="file-input-hidden"
                    @change="${this.onFileSelected.bind(this)}"
                    ${(ref: HTMLInputElement) => {
                      this.fileInputRef = ref;
                    }}
                  />
                </div>

                ${this.selectedFile
                  ? html`<div class="file-name">✓ ${this.selectedFile.name}</div>`
                  : ''}

                ${this.uploadMessage
                  ? html`<div class="message ${this.uploadMessage.includes('✅') ? 'success' : 'error'}">
                      ${this.uploadMessage}
                    </div>`
                  : ''}

                <div class="button-group">
                  <button
                    class="btn btn-primary"
                    @click="${this.uploadImage}"
                    ?disabled="${!this.selectedFile || !this.imageName}"
                  >
                    📤 Upload Image
                  </button>
                  <button
                    class="btn btn-secondary"
                    @click="${() => {
                      this.selectedFile = null;
                      this.imageName = '';
                      if (this.fileInputRef) this.fileInputRef.value = '';
                    }}"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <div class="storage-info">
                <strong>💾 Storage Usage:</strong>
                <div class="storage-bar">
                  <div
                    class="storage-fill"
                    style="width: ${this.storageInfo.percentage}%"
                  >
                    ${this.storageInfo.percentage > 10 ? `${this.storageInfo.percentage}%` : ''}
                  </div>
                </div>
                <small
                  >${(this.storageInfo.used / 1024).toFixed(1)}KB / ${(
                  this.storageInfo.max / 1024 / 1024
                ).toFixed(1)}MB</small
                >
              </div>

              <div class="category-images">
                <h3 class="category-title">📸 ${this.selectedCategory.toUpperCase()}</h3>
                ${categoryImages.length === 0
                  ? html`<div class="empty-message">No images in this category yet</div>`
                  : html`
                      <div class="images-grid">
                        ${categoryImages.map(
                          img =>
                            html`
                              <div class="image-card">
                                <img src="${img.dataUrl}" alt="${img.name}" />
                                <div class="image-card-name">${img.name}</div>
                                <div class="image-card-actions">
                                  <button class="delete-btn" @click="${() => this.deleteImage(img.id)}">
                                    🗑️ Delete
                                  </button>
                                </div>
                              </div>
                            `
                        )}
                      </div>
                    `}
              </div>

              <div class="button-group">
                <button class="btn btn-secondary" @click="${this.deleteCategory}">
                  🗑️ Delete All in ${this.selectedCategory}
                </button>
                <button class="btn btn-danger" @click="${this.clearAll}">
                  ⚠️ Clear All Images
                </button>
              </div>
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-custom-images': CustomImages;
  }
}
