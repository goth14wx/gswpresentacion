import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-slider-two-angular',
  templateUrl: './slider-two-angular.component.html',
  styleUrls: ['./slider-two-angular.component.css']
})
export class SliderTwoAngularComponent implements OnInit {
  comandos = [
    {
    comando: 'ng new nombreDeLaApp'
  },
  {
    comando: 'npm i --s firebase @angular/firebase'
  },
  {
    comando: 'ng serve -o'
  }
 ];
 moverAyuda = true;
  constructor() { }

  ngOnInit() {
    AOS.init();
    setInterval(() => {
      this.moverAyuda = !this.moverAyuda;
    }, 1000);
  }

}
