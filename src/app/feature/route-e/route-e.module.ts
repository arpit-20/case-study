import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteEComponent } from './route-e.component';
import { FormsModule } from '@angular/forms';
import { RouteERoutingModule } from './route-e-routing.module';
import { Ng2OrderModule } from 'ng2-order-pipe';

console.log('Route E loaded');

@NgModule({
  declarations: [
    RouteEComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteERoutingModule,
    Ng2OrderModule
  ]
})
export class RouteEModule { }
