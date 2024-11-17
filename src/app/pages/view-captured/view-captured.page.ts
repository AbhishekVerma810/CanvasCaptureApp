import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService, StorageItem } from '../../services/storage.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-view-captured',
  templateUrl: './view-captured.page.html',
  styleUrls: ['./view-captured.page.scss'],
})
export class ViewCapturedPage implements OnInit, OnDestroy {
  images: StorageItem[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private storageService: StorageService,
   
  ) {}

  ngOnInit() {
     this.storageService.getImagesObservable()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (images) => {
          this.images = images;
          console.log('this.images', this.images)
        },
        error: (error) => {
          console.error('Error loading images:', error);
         }
      });
 }
 ngOnDestroy() {
   
  }
}