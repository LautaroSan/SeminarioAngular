import { Component, OnInit } from '@angular/core';
import { gymnastRankService } from '../gymnast-rank.service';
import { Gymnast } from '../gymnast-list/Gymnasts';

@Component({
  selector: 'app-gymnasts-rank',
  templateUrl: './gymnasts-rank.component.html',
  styleUrls: ['./gymnasts-rank.component.scss']
})
export class gymnastsRankComponent implements OnInit {

  gymnastList : Gymnast[] = [];

  constructor( private gymnastRankService : gymnastRankService) {
    gymnastRankService.gymnastList.subscribe(c=>this.gymnastList = c)
   }

  ngOnInit(): void {
  }

 /*total() : number {

  let total : number = 0;
  for (const item of this.cartList) {
    total+=item.quantity*item.price;
  }

  return total;
 }*/

}
