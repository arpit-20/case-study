import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteCComponent } from "./route-c.component";

const route: Routes = [
    { path: '', component: RouteCComponent }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RouteCRoutingModule { }