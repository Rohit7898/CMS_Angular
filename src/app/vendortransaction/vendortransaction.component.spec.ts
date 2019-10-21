import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendortransactionComponent } from './vendortransaction.component';

describe('VendortransactionComponent', () => {
  let component: VendortransactionComponent;
  let fixture: ComponentFixture<VendortransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendortransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendortransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
