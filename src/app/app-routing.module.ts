import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'route-a',
    loadChildren: () => import('../app/feature/route-a/route-a.module').then(m => m.RouteAModule)
  },
  {
    path: 'route-b',
    loadChildren: () => import('../app/feature/route-b/route-b.module').then(m => m.RouteBModule)
  },
  {
    path: 'route-c',
    loadChildren: () => import('../app/feature/route-c/route-c.module').then(m => m.RouteCModule)
  },
  {
    path: 'route-d',
    loadChildren: () => import('../app/feature/route-d/route-d.module').then(m => m.RouteDModule)
  },
  {
    path: 'route-e',
    loadChildren: () => import('../app/feature/route-e/route-e.module').then(m => m.RouteEModule)
  },
  {
    path: 'route-f',
    loadChildren: () => import('../app/feature/route-f/route-f.module').then(m => m.RouteFModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
