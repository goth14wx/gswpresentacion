import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderFourgoogleCloudComponent } from './slider-fourgoogle-cloud.component';

describe('SliderFourgoogleCloudComponent', () => {
  let component: SliderFourgoogleCloudComponent;
  let fixture: ComponentFixture<SliderFourgoogleCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderFourgoogleCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFourgoogleCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
