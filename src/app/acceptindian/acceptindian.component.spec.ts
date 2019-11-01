import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptindianComponent } from './acceptindian.component';

describe('AcceptindianComponent', () => {
  let component: AcceptindianComponent;
  let fixture: ComponentFixture<AcceptindianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptindianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptindianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
