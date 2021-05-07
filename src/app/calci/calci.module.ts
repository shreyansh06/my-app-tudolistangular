import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumComponent } from './sum/sum.component';
import { FormsModule } from '@angular/forms';
import { SubtractComponent } from './subtract/subtract.component';
import { MultiplyComponent } from './multiply/multiply.component';
import { DivideComponent } from './divide/divide.component';
import { FactorialComponent } from './factorial/factorial.component'


@NgModule({
  declarations: [
    SumComponent,
    SubtractComponent,
    MultiplyComponent,
    DivideComponent,
    FactorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SumComponent,
    SubtractComponent,
    MultiplyComponent,
    DivideComponent,
    FactorialComponent
  ]

})
export class CalciModule { }
