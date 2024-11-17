import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanvasCapturePage } from './canvas-capture.page';

describe('CanvasCapturePage', () => {
  let component: CanvasCapturePage;
  let fixture: ComponentFixture<CanvasCapturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasCapturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
