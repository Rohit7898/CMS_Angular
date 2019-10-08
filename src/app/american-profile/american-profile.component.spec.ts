import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanProfileComponent } from './american-profile.component';

describe('AmericanProfileComponent', () => {
  let component: AmericanProfileComponent;
  let fixture: ComponentFixture<AmericanProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericanProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericanProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
