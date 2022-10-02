import { Component, OnInit } from '@angular/core';
import { MaterialDataService } from '../material-data.service';
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
    "stock": 8,
    "image": "assets/img/l18.jpg",
    "discount": false,
    "quantity" : 0
  },
  {
    "name": "Ladrillo 12",
    "type": "mamposteria",
    "price": 100,
    "stock": 5,
    "image": "assets/img/l12.jpg",
    "discount": true,
    "quantity" : 0
  },
  {
    "name": "Ladrillo 8",
    "type": "mamposteria",
    "price": 60,
    "stock": 0,
    "image": "assets/img/l8.jpg",
    "discount": false,
    "quantity" : 0
  },
]

  constructor( private materialCartService : MaterialDataService) { }

  ngOnInit(): void {
  }

  addToCart(mat : Material){
    if(mat.quantity!=0){
      this.materialCartService.addToCart(mat);
      mat.stock -= mat.quantity;
      mat.quantity = 0;
    }
    

  }
  

}
