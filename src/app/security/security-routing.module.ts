import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage, RegisterPage } from './containers';

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
