import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderThreeFirebaseTwoComponent } from './slider-three-firebase-two.component';

describe('SliderThreeFirebaseTwoComponent', () => {
  let component: SliderThreeFirebaseTwoComponent;
  let fixture: ComponentFixture<SliderThreeFirebaseTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderThreeFirebaseTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderThreeFirebaseTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
