import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetransactionComponent } from './employeetransaction.component';

describe('EmployeetransactionComponent', () => {
  let component: EmployeetransactionComponent;
  let fixture: ComponentFixture<EmployeetransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
