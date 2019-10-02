import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianprofileComponent } from './indianprofile.component';

describe('IndianprofileComponent', () => {
  let component: IndianprofileComponent;
  let fixture: ComponentFixture<IndianprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndianprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndianprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
