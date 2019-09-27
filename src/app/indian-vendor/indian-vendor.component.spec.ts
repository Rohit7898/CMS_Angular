import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianVendorComponent } from './indian-vendor.component';

describe('IndianVendorComponent', () => {
  let component: IndianVendorComponent;
  let fixture: ComponentFixture<IndianVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
