import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    AboutMeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
