import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from './features/movie/movie.component';
import { AppsComponent } from './features/apps/apps.component';
import { BookComponent } from './features/book/book.component';
import { DetailComponent } from './features/detail/detail.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent, MovieComponent, AppsComponent, BookComponent, DetailComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
