import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Material } from './materials-list/Materials';

@Injectable({
  providedIn: 'root'
})
export class MaterialDataService {
  
  private _cartList: Material[] = [];
  cartList : BehaviorSubject<Material[]> = new BehaviorSubject<Material[]>([]);
  
  constructor() { }

  addToCart(mat: Material) {
    let item  = this._cartList.find((v) => v.name == mat.name);
    if(!item){
      this._cartList.push({...mat});
    }else{
      item.quantity+=mat.quantity;
    }

    console.log(this._cartList)
    this.cartList.next(this._cartList);
  }
}
