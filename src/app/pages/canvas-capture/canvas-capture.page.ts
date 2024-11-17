import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

interface ImageDimensions {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
}

@Component({
  selector: 'app-canvas-capture',
  templateUrl: './canvas-capture.page.html',
  styleUrls: ['./canvas-capture.page.scss'],
})
export class CanvasCapturePage implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  
  private ctx: CanvasRenderingContext2D;
  private capturedImage: HTMLImageElement | null = null;
  private imageData: string = '';
  
  canvasWidth: number = 300;
  canvasHeight: number = 300;
  isProcessing: boolean = false;

  constructor(
    private storageService: StorageService,
    private router: Router,
   
  ) {}

  async ngOnInit() {
    try {
      await this.storageService.init();
    } catch (error) {
      console.log('Failed to initialize storage');
    }
  }
  ngOnDestroy() {
    this.clearCanvas();
  }
  async captureImage() {
     try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });
      this.imageData = image.dataUrl;
      this.capturedImage = new Image();
      this.capturedImage.src = this.imageData;
      this.capturedImage.onload = () => {
        this.drawImageOnCanvas();
        };
        this.capturedImage.onerror = () => {
        throw new Error('Failed to load captured image');
      };
    } catch (error) {
       console.log('Failed to capture image');
    }
  }
  private calculateImageDimensions(): ImageDimensions {
    if (!this.capturedImage) {
      throw new Error('No image available');
    }
    const imageAspectRatio = this.capturedImage.width / this.capturedImage.height;
    const canvasAspectRatio = this.canvasWidth / this.canvasHeight;
    let drawWidth = this.canvasWidth;
    let drawHeight = this.canvasHeight;
    let offsetX = 0;
    let offsetY = 0;
    if (imageAspectRatio > canvasAspectRatio) {
      drawHeight = this.canvasWidth / imageAspectRatio;
      offsetY = (this.canvasHeight - drawHeight) / 2;
    } else {
      drawWidth = this.canvasHeight * imageAspectRatio;
      offsetX = (this.canvasWidth - drawWidth) / 2;
    }
    return { width: drawWidth, height: drawHeight, offsetX, offsetY };
  }
  private drawImageOnCanvas() {
    if (!this.capturedImage || !this.canvas) return;
    const canvasElement = this.canvas.nativeElement;
    this.ctx = canvasElement.getContext('2d');
    if (!this.ctx) {
      console.log('Canvas context not available');
      return;
    }
    canvasElement.width = this.canvasWidth;
    canvasElement.height = this.canvasHeight;
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    try {
      const dimensions = this.calculateImageDimensions();
      this.ctx.drawImage(
        this.capturedImage,
        dimensions.offsetX,
        dimensions.offsetY,
        dimensions.width,
        dimensions.height
      );
    } catch (error) {
       console.log('Failed to draw image on canvas');
    }
  }
   async resizeImage() {
    if (this.capturedImage) {
      this.drawImageOnCanvas();
    }
  }
  async exportImage() {
    if (!this.capturedImage || !this.canvas) return;
     try {
      const canvasElement = this.canvas.nativeElement;
      const imageData = canvasElement.toDataURL('image/png');
      await this.storageService.saveImage(imageData);
      this.clearCanvas();
      this.router.navigate(['/transit-view']);
    } catch (error) {
        console.log('error==>',error)
    }
  }
  private clearCanvas() {
    this.capturedImage = null;
    this.imageData = '';
    if (this.ctx) {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
  }
}