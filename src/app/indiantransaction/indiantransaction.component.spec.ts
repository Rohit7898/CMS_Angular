import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiantransactionComponent } from './indiantransaction.component';

describe('IndiantransactionComponent', () => {
  let component: IndiantransactionComponent;
  let fixture: ComponentFixture<IndiantransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiantransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiantransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
