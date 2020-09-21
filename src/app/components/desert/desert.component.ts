import { Component, OnInit } from '@angular/core';
import { Desert } from 'src/assets/desert';

@Component({
  selector: 'app-desert',
  templateUrl: './desert.component.html',
  styleUrls: ['./desert.component.css']
})
export class DesertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  palacinka: Desert = {
    name: 'Palacinka',
    price: 150,
    url: 'https://www.croatiaweek.com/wp-content/uploads/2016/07/palacinke.jpg?x46277'
  }

  kolaci: Desert = {
    name: 'Kolaci',
    price: 400,
    url: 'https://www.stamevski.com/wp-content/uploads/2018/11/sitni-kolaci-3k.jpg'
  }

  torte: Desert = {
    name: 'Torte',
    price: 600,
    url: 'https://i.ytimg.com/vi/TePlRKt6xJE/maxresdefault.jpg'
  }

  sladoled: Desert = {
    name: 'Sladoled',
    price: 100,
    url: 'https://stil.kurir.rs/data/images/2017/08/19/16/125137_sladoled_ff.jpg'
  }

}
