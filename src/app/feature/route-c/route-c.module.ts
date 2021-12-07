import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouteCComponent } from './route-c.component';
import { RouteCRoutingModule } from './route-c-routing.module';
import { SiblingAComponent } from './sibling-a/sibling-a.component';
import { SiblingBComponent } from './sibling-b/sibling-b.component';
import { SiblingCComponent } from './sibling-c/sibling-c.component';
import { SiblingDComponent } from './sibling-d/sibling-d.component';

console.log('Route C loaded');

@NgModule({
  declarations: [
    RouteCComponent,
    SiblingAComponent,
    SiblingBComponent,
    SiblingCComponent,
    SiblingDComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouteCRoutingModule
  ]
})
export class RouteCModule { }
