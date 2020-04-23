import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronatrackerComponent } from './coronatracker.component';

describe('CoronatrackerComponent', () => {
  let component: CoronatrackerComponent;
  let fixture: ComponentFixture<CoronatrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronatrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronatrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
