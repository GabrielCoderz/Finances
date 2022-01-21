import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/error404/error404.component';

const routes: Routes = [
  // { path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '**', component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
