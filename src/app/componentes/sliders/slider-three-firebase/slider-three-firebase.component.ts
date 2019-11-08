import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-three-firebase',
  templateUrl: './slider-three-firebase.component.html',
  styleUrls: ['./slider-three-firebase.component.css']
})
export class SliderThreeFirebaseComponent implements OnInit {
  moverAyuda = true;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.moverAyuda = !this.moverAyuda;
    }, 1000);
  }

}
