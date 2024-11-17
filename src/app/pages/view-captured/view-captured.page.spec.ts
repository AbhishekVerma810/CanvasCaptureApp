import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewCapturedPage } from './view-captured.page';

describe('ViewCapturedPage', () => {
  let component: ViewCapturedPage;
  let fixture: ComponentFixture<ViewCapturedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCapturedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
