import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieComponent } from './features/movie/movie.component';
import { AppsComponent } from './features/apps/apps.component';
import { BookComponent } from './features/book/book.component';
import { DetailComponent } from './features/detail/detail.component';
import { AppRoutingModule } from './app.routing.module';
import { NewmovieComponent } from './features/new-movie/new-movie.component';
import { FormsModule } from '@angular/forms';
import { MovieDataService } from './common/services/movie-data.service';

@NgModule({
  declarations: [
    AppComponent, MovieComponent, AppsComponent, BookComponent, DetailComponent,NewmovieComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule, AppRoutingModule, FormsModule
  ],
  providers: [MovieDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
