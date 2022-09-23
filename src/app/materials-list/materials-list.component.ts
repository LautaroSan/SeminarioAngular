import { Component, OnInit } from '@angular/core';
import { Material } from './Materials';

@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.scss']
})
export class MaterialsListComponent implements OnInit {

  materials : Material[] = [
  {
    "name": "Ladrillo 18",
    "type": "mamposteria",
    "price": 120,
    "stock": 2000,
    "image": "assets/img/l18.jpg",
    "discount": false
  },
  {
    "name": "Ladrillo 12",
    "type": "mamposteria",
    "price": 120,
    "stock": 2000,
    "image": "assets/img/l12.jpg",
    "discount": true
  },
  {
    "name": "Ladrillo 8",
    "type": "mamposteria",
    "price": 120,
    "stock": 0,
    "image": "assets/img/l8.jpg",
    "discount": false
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
