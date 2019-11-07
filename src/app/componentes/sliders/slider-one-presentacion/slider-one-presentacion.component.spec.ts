import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOnePresentacionComponent } from './slider-one-presentacion.component';

describe('SliderOnePresentacionComponent', () => {
  let component: SliderOnePresentacionComponent;
  let fixture: ComponentFixture<SliderOnePresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderOnePresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderOnePresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
