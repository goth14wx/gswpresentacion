import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-fourgoogle-cloud',
  templateUrl: './slider-fourgoogle-cloud.component.html',
  styleUrls: ['./slider-fourgoogle-cloud.component.css']
})
export class SliderFourgoogleCloudComponent implements OnInit {
  moverAyuda = true;
  comandos = [
    {
    comando: 'git clone https://www.github.com/repositorioGit.git'
  },
  {
    comando: 'npm i @angular/cli'
  },
  {
    comando: 'cd directorioClonado/'
  },
  {
    comando: 'ng build'
  },
  {
    comando: 'gcloud app deploy'
  },
  {
    comando: 'gcloud app browse'
  }
 ];
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.moverAyuda = !this.moverAyuda;
    }, 1000);
  }

}
