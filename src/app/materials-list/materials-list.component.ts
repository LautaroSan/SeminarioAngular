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
    "stock": 8,
    "image": "assets/img/l18.jpg",
    "discount": false,
    "quantity" : 0
  },
  {
    "name": "Ladrillo 12",
    "type": "mamposteria",
    "price": 120,
    "stock": 5,
    "image": "assets/img/l12.jpg",
    "discount": true,
    "quantity" : 0
  },
  {
    "name": "Ladrillo 8",
    "type": "mamposteria",
    "price": 120,
    "stock": 0,
    "image": "assets/img/l8.jpg",
    "discount": false,
    "quantity" : 0
  },
]

  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(material : Material) : void{
    if(material.quantity<material.stock){
      material.quantity++;
    }
  }

  downQuantity(material : Material) : void{
    if(material.quantity>0){
      material.quantity--;
    }
  }

  verifyInput(event: any, material : Material) : void{
    let input = event.target;
    if((input.value >= 0) && (input.value <= material.stock)){

    }else{
      event.preventDefault();
      input.value = 0;
    }
  }

}
