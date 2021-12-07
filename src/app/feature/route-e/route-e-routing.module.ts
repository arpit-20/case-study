import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteEComponent } from "./route-e.component";

const route: Routes = [
    { path: '', component: RouteEComponent }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RouteERoutingModule { }