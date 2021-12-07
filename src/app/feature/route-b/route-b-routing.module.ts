import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteBComponent } from "./route-b.component";

const route: Routes = [
    { path: '', component: RouteBComponent }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RouteBRoutingModule { }