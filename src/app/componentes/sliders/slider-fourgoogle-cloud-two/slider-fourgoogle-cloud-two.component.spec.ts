import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFourgoogleCloudTwoComponent } from './slider-fourgoogle-cloud-two.component';

describe('SliderFourgoogleCloudTwoComponent', () => {
  let component: SliderFourgoogleCloudTwoComponent;
  let fixture: ComponentFixture<SliderFourgoogleCloudTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderFourgoogleCloudTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFourgoogleCloudTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
