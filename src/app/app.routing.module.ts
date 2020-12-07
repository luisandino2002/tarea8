import { NgModule } from '@angular/core';
import { Routes,RouterModule} from "@angular/router";
import { AppsComponent } from './features/apps/apps.component';
import { BookComponent } from './features/book/book.component';
import { MovieComponent } from './features/movie/movie.component';

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
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{
}