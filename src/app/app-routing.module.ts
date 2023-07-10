import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isAuthenticatedGuard } from './auth/guards/is-authenticated.guard';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
  },

  {
    path: 'auth',
   // canActivate: [ isNotAuthenticatedGuard ],
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },

  {
    path:'products',
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:'signals',
    loadChildren:()=>import('./signals/signals.module').then(m=>m.SignalsModule)
  },
  {
    path: '**',
    redirectTo: 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
