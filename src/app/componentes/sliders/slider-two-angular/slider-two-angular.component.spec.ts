import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTwoAngularComponent } from './slider-two-angular.component';

describe('SliderTwoAngularComponent', () => {
  let component: SliderTwoAngularComponent;
  let fixture: ComponentFixture<SliderTwoAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTwoAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTwoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
