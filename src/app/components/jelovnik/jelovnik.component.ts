import { Component, OnInit } from '@angular/core';
import { Jelovnik } from 'src/assets/jelovnik';

@Component({
  selector: 'app-jelovnik',
  templateUrl: './jelovnik.component.html',
  styleUrls: ['./jelovnik.component.css']
})
export class JelovnikComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pljeskavica: Jelovnik = {
    name: 'Pljeskavica',
    price: 150,
    url: 'https://belgradeatnight.com/wp-content/uploads/2016/10/top-10-serbian-foods-pljeskavica.jpg'
  }

  pizza: Jelovnik = {
    name: 'Pizza',
    price: 800,
    url: 'https://ichef.bbci.co.uk/food/ic/food_16x9_448/recipes/alpine_pizza_32132_16x9.jpg'
  }

  snicla: Jelovnik = {
    name: 'SniclaKaradjordjeva',
    price: 600,
    url: 'https://static.mondo.rs/Picture/368094/jpeg/karadjordjeva-snicla.jpg'
  }

  pomfrit: Jelovnik = {
    name: 'Pomfrit',
    price: 100,
    url: 'https://www.eduinfo.ba/wp-content/uploads/2017/12/pomfrit-2-890x395_c.jpg'
  }

}
