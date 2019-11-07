import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-slider-one-presentacion',
  templateUrl: './slider-one-presentacion.component.html',
  styleUrls: ['./slider-one-presentacion.component.css']
})
export class SliderOnePresentacionComponent implements OnInit {
  logos = [
    {
      titulo: 'Angular',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png',
      animar: false,
      animacion: 'bounceIn',
      mostrar: false
    },
    {
      titulo: 'Cloud',
      url: 'https://d1o2okarmduwny.cloudfront.net/wp-content/uploads/2014/04/icon_cloud_192pt_clr.png',
      animar: false,
      animacion: 'jackInTheBox',
      mostrar: false
    },
    {
      titulo: 'Firebase',
      url: 'https://miro.medium.com/max/400/1*JktK87FL_sqDDnuxHxe6Fw.png',
      animar: false,
      animacion: 'zoomIn',
      mostrar: false
    }
  ];
  constructor() {

  }


   ngOnInit() {
    setTimeout(() => {
      this.logos[0].mostrar = true;
      this.logos[0].animar = true;
     }, 1000);

    setTimeout(() => {
      this.logos[1].mostrar = true;
      this.logos[1].animar = true;
     }, 1010);

    setTimeout(() => {
      this.logos[2].mostrar = true;
      this.logos[2].animar = true;
     }, 1020);
  }

}
