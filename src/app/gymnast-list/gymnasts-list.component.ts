import { Component, OnInit } from '@angular/core';
import { gymnastRankService } from '../gymnast-rank.service';
import { Gymnast } from './Gymnasts';

@Component({
  selector: 'app-gymnasts-list',
  templateUrl: './gymnast-list.component.html',
  styleUrls: ['./gymnasts-list.component.scss']
})
export class GymnastsListComponent implements OnInit {

  contador : number;
  masVotado : Gymnast;

  gymnasts : Gymnast[] = [
  {
    "name": "Kohei Uchimura",
    "nationality": "Japón",
    "age": 33,
    "height": 1.62,
    "image": "assets/img/uchimura.jpg",
    "totalVotes": 0,
    "quantity" : 0
  },
  {
    "name": "Max Whitlock",
    "nationality": "Reino Unido",
    "age": 29,
    "height": 1.67,
    "image": "assets/img/whitlock.jpg",
    "totalVotes": 0,
    "quantity" : 0
  },
  {
    "name": "Alexei Nemov",
    "nationality": "Rusia",
    "age": 46,
    "height": 1.73,
    "image": "assets/img/nemov.jpg",
    "totalVotes": 0,
    "quantity" : 0
  },
]

  constructor( private gymnastRankService : gymnastRankService) { 
    gymnastRankService.contador.subscribe(c=>this.contador=c)
    gymnastRankService.masVotado.subscribe(m=>this.masVotado=m);
  }

  ngOnInit(): void {
  }

  addVote(gymnast : Gymnast){
    if(gymnast.quantity<=this.contador){
      this.gymnastRankService.addVote(gymnast);
      gymnast.quantity = 0;
    }
    

  }
  

}
