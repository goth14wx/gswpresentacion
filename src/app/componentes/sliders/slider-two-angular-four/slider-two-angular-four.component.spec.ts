import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTwoAngularFourComponent } from './slider-two-angular-four.component';

describe('SliderTwoAngularFourComponent', () => {
  let component: SliderTwoAngularFourComponent;
  let fixture: ComponentFixture<SliderTwoAngularFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTwoAngularFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTwoAngularFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
