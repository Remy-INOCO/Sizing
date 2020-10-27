import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInfoComponentComponent } from './display-info-component.component';

describe('DisplayInfoComponentComponent', () => {
  let component: DisplayInfoComponentComponent;
  let fixture: ComponentFixture<DisplayInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
