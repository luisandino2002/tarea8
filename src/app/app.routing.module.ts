import { NgModule } from '@angular/core';
import { Routes,RouterModule} from "@angular/router";
import { AppsComponent } from './features/apps/apps.component';
import { BookComponent } from './features/book/book.component';
import { DetailComponent } from './features/detail/detail.component';
import { MovieComponent } from './features/movie/movie.component';
import { NewmovieComponent } from './features/new-movie/new-movie.component';

const routes: Routes = [
    {
    path: 'movies',
    component: MovieComponent,
    },
    {
        path: "apps",
        component: AppsComponent,
    },
    {
        path: "book",
        component: BookComponent,
    },
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full',
    },
    {
        path: 'moviesd/:type/:name',
        component: DetailComponent,
    },
    {
        path: 'newmovie',
        component: NewmovieComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{
}