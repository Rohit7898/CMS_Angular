import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanVendorComponent } from './mexican-vendor.component';

describe('MexicanVendorComponent', () => {
  let component: MexicanVendorComponent;
  let fixture: ComponentFixture<MexicanVendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexicanVendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MexicanVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
