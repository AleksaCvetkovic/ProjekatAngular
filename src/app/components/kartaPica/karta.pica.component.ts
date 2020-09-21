import { Component, OnInit } from '@angular/core';
import { kartaPica } from 'src/assets/kartapica';
@Component({

  selector: 'app-kartaPica',
  templateUrl: './karta.pica.component.html',
  styleUrls: ['./karta.pica.component.css']
})
export class KartaPicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  pivo: kartaPica = {
    name: 'pivo',
    price: 100,
    url: 'https://cdn.webnoviny.sk/sites/21/2016/02/ace58b0b8_shutterstock_129308426-1.jpg'
  };


  vino: kartaPica = {
    name: 'vino',
    price: 200,
    url: 'https://opusteno.rs/slike/2016/04/crveno-vino-jacanje-imuniteta-29865/_sp-crveno-vino-jacanje-imuniteta.jpg'
  };


  jabuka: kartaPica = {
    name: 'jabuka',
    price: 50,
    url: 'https://cdn.agroklub.com/upload/images/image/7-sok-od-divlje-jabuke.jpg'
  };


  multivitamin: kartaPica = {
    name: 'multivitamin',
    price: 60,
    url: 'https://www.recepti.com/img/recipe/20962-gusti-sok-multivitamin_zoom.jpg'
  };


  sampanjac: kartaPica = {
    name: 'sampanjac',
    price: 500,
    url: 'http://najpoklon.com/image/data/lux%20poklon/bottega_venetiangold_prosecco750ml-najpoklon.jpg'
  };


}
