import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Material } from '../materials-list/Materials';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {
 
  @Input()
  quantity : number;

  @Input()
  max : number;

  @Output() quantityChange = new EventEmitter<number>();

  constructor() { }

 

  ngOnInit(): void {
  }

  upQuantity() : void{
    if(this.quantity<this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity() : void{
    if(this.quantity>0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  verifyInput(event: any) : void{
    let input = event.target;
    if((input.value >= 0) && (input.value <= this.max)){
      this.quantity=input.value;
    }else{
      this.quantity = 0;
      input.value = 0;
    }
  }

}
