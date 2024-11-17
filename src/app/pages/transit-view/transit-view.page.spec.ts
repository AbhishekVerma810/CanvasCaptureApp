import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransitViewPage } from './transit-view.page';

describe('TransitViewPage', () => {
  let component: TransitViewPage;
  let fixture: ComponentFixture<TransitViewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
