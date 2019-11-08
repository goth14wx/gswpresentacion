import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderThreeFirebaseComponent } from './slider-three-firebase.component';

describe('SliderThreeFirebaseComponent', () => {
  let component: SliderThreeFirebaseComponent;
  let fixture: ComponentFixture<SliderThreeFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderThreeFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderThreeFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
