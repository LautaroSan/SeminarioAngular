import { Component, OnInit } from '@angular/core';
import { MaterialDataService } from '../material-data.service';
import { Material } from '../materials-list/Materials';

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.scss']
})
export class CarroComprasComponent implements OnInit {

  cartList : Material[] = [];

  constructor( private cartService : MaterialDataService) {
    cartService.cartList.subscribe(c=>this.cartList = c)
   }

  ngOnInit(): void {
  }

 total() : number {

  let total : number = 0;
  for (const item of this.cartList) {
    total+=item.quantity*item.price;
  }

  return total;
 }

}
