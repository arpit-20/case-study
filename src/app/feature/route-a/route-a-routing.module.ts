import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteAComponent } from "./route-a.component";

const route: Routes = [
    { path: '', component: RouteAComponent }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RouteARoutingModule { }