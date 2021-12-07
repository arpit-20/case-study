import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RouteDComponent } from "./route-d.component";

const route: Routes = [
    { path: '', component: RouteDComponent }
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})
export class RouteDRoutingModule { }