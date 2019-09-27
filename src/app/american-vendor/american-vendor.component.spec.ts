import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanVendorComponent } from './american-vendor.component';

describe('AmericanVendorComponent', () => {
  let component: AmericanVendorComponent;
  let fixture: ComponentFixture<AmericanVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
