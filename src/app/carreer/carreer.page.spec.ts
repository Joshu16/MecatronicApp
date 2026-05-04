import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarreerPage } from './carreer.page';

describe('CarreerPage', () => {
  let component: CarreerPage;
  let fixture: ComponentFixture<CarreerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
