import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccommodationDetailPage } from './accommodation-detail.page';

describe('AccommodationDetailPage', () => {
  let component: AccommodationDetailPage;
  let fixture: ComponentFixture<AccommodationDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccommodationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
