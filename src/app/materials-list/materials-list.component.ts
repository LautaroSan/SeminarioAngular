import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materials-list',
  templateUrl: './materials-list.component.html',
  styleUrls: ['./materials-list.component.scss']
})
export class MaterialsListComponent implements OnInit {

  material = {
    "name": "Ladrillo 18",
    "type": "mamposteria",
    "price": 120,
    "stock": 2000,
    "image": "assets/img/l18.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
