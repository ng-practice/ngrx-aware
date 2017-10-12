import { NgModule } from '@angular/core';
import { Route, Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { IsUserAuthenticated } from './authentication';

import { NotFound } from './component-library';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'notes',
    loadChildren: './notes/notes.module#NotesModule',
    canLoad: [IsUserAuthenticated]
  },
  {
    path: 'feedback',
    loadChildren: './feedback/feedback.module#FeedbackModule',
    canLoad: [IsUserAuthenticated]
  },
  {
    path: '**',
    component: NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: IsUserAuthenticated,
    useFactory(http: HttpClient, router: Router) {
      return new IsUserAuthenticated(
        http,
        router,
        'http://localhost:4280/is-user-authenticated',
        '/login');
    },
    deps: [HttpClient, Router]
  }]
})
export class AppRoutingModule { }
