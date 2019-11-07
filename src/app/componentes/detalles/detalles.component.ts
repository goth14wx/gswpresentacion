import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  config: any;
  // tslint:disable-next-line: variable-name
  fullpage_api: any;
  // tslint:disable-next-line: ban-types
 
  constructor() {
      // for more details on config options please visit fullPage.js docs
      this.config = {

        // fullpage options
        licenseKey: 'YOUR LICENSE KEY HERE',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
        menu: '#menu',
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        navigation: true,
        autoScrolling: true,
        // fullpage callbacks
        afterResize: () => {
          // console.log('After resize');
        },
        afterLoad: (origin, destination, direction) => {
          // console.log(origin.index);
        }
      };
  }


  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
    this.fullpage_api.setAllowScrolling(false); // ES PARA QUE NO SE DETECTE EL SCROLL
  }
  ngOnInit() {
  }

}
