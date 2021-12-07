import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteFComponent } from "./route-f.component";

const route: Routes = [
    { path: '', component: RouteFComponent }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RouteFRoutingModule { }