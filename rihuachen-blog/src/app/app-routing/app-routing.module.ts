import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import {ArticleListComponent} from '../article-list/article-list.component';
import {AboutMeComponent} from '../about-me/about-me.component';
// import {DashboardComponent} from '../dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '/article-list', pathMatch: 'full'},
  { path: 'about-me', component: AboutMeComponent },
  { path: 'article-list', component: ArticleListComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule],
  declarations: []
})
export class AppRoutingModule { }
