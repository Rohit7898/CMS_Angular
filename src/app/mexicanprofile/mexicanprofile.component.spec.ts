import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicanprofileComponent } from './mexicanprofile.component';

describe('MexicanprofileComponent', () => {
  let component: MexicanprofileComponent;
  let fixture: ComponentFixture<MexicanprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexicanprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MexicanprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
