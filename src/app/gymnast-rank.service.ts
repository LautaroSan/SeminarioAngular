import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gymnast } from './gymnast-list/Gymnasts';


@Injectable({
  providedIn: 'root'
})
export class gymnastRankService {

  private _contador : number = 20;
  contador : BehaviorSubject<number> = new BehaviorSubject<number>(this._contador);
  private _gymnastList: Gymnast[] = [];
  gymnastList : BehaviorSubject<Gymnast[]> = new BehaviorSubject<Gymnast[]>([]);
  private _masVotado : Gymnast = {
    "name": "",
    "nationality": "",
    "age": 0 ,
    "height": 0,
    "image": "assets/img/l18.jpg",
    "totalVotes": 0,
    "quantity" : 0
  }
  masVotado : BehaviorSubject<Gymnast> = new BehaviorSubject<Gymnast>(this._masVotado);

  
  constructor() { }

  addVote(gymnast: Gymnast) {
    let item  = this._gymnastList.find((v) => v.name == gymnast.name);
    if(!item){
      gymnast.totalVotes+=gymnast.quantity;
      this._gymnastList.push({...gymnast});
    
    }else{
      item.totalVotes+=gymnast.quantity;
    }
    this._contador-= gymnast.quantity;
    this.contador.next(this._contador);
    this._gymnastList.sort(function(a,b){return b.totalVotes-a.totalVotes});
    this._masVotado = this._gymnastList[0];
    this.masVotado.next(this._masVotado);
    this.gymnastList.next(this._gymnastList);
  }
}
