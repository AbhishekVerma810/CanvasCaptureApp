import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject, Observable } from 'rxjs';

export interface StorageItem {
  id: string;
  imageData: string;
  timestamp: number;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;
  private initialized = false;
  private imagesSubject = new BehaviorSubject<StorageItem[]>([]);

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    if (this.initialized) {
      return;
    }

    try {
      const storage = await this.storage.create();
      this._storage = storage;
      this.initialized = true;
      await this.loadImages();
    } catch (error) {
      console.error('Error initializing storage:', error);
      throw new Error('Storage initialization failed');
    }
  }

  private async loadImages() {
    try {
      const images = await this._storage?.get('images') || [];
      this.imagesSubject.next(images);
    } catch (error) {
      console.error('Error loading images:', error);
      this.imagesSubject.next([]);
    }
  }

  async saveImage(imageData: string): Promise<void> {
    if (!this._storage) {
      throw new Error('Storage not initialized');
    }
      try {
      const newImage: StorageItem = {
        id: Date.now().toString(),
        imageData,
        timestamp: Date.now()
      };
      const currentImages = await this._storage.get('images') || [];
      const updatedImages = [...currentImages, newImage];
      await this._storage.set('images', updatedImages);
      this.imagesSubject.next(updatedImages);
    } catch (error) {
      console.error('Error saving image:', error);
      throw new Error('Failed to save image');
    }
  }
   async getImages(): Promise<StorageItem[]> {
    if (!this._storage) {
      throw new Error('Storage not initialized');
    }
    try {
      return await this._storage.get('images') || [];
    } catch (error) {
      console.error('Error getting images:', error);
      return [];
    }
  }
  getImagesObservable(): Observable<StorageItem[]> {
    return this.imagesSubject.asObservable();
  }
}