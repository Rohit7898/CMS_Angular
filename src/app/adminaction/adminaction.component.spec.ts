import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminactionComponent } from './adminaction.component';

describe('AdminactionComponent', () => {
  let component: AdminactionComponent;
  let fixture: ComponentFixture<AdminactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
