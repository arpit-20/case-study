import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteDComponent } from './route-d.component';
import { FormsModule } from '@angular/forms';
import { RouteDRoutingModule } from './route-d-routing.module';
import { AComponentComponent } from './a-component/a-component.component';
import { BComponentComponent } from './b-component/b-component.component';
import { CComponentComponent } from './c-component/c-component.component';
import { DComponentComponent } from './d-component/d-component.component';

console.log('Route D loaded');

@NgModule({
  declarations: [
    RouteDComponent,
    AComponentComponent,
    BComponentComponent,
    CComponentComponent,
    DComponentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteDRoutingModule
  ]
})
export class RouteDModule { }
