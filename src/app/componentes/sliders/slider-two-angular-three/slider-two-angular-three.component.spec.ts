import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTwoAngularThreeComponent } from './slider-two-angular-three.component';

describe('SliderTwoAngularThreeComponent', () => {
  let component: SliderTwoAngularThreeComponent;
  let fixture: ComponentFixture<SliderTwoAngularThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTwoAngularThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTwoAngularThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
