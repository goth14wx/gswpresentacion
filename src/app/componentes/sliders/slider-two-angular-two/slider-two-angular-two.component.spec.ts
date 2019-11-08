import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderTwoAngularTwoComponent } from './slider-two-angular-two.component';

describe('SliderTwoAngularTwoComponent', () => {
  let component: SliderTwoAngularTwoComponent;
  let fixture: ComponentFixture<SliderTwoAngularTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderTwoAngularTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTwoAngularTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
