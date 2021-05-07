import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public num1:number;
  public num2:number;
  public result:number
  divide(){
  
    this.result=this.num1 / this.num2;
  }
}
