import { from } from 'rxjs';
import {Component} from "@angular/core";
import { Movie } from 'src/app/common/models/movie.model';
import { MovieDataService } from 'src/app/common/services/movie-data.service';

@Component ({
    selector: "new-movie",
    templateUrl: "./new-movie.component.html"
})

export class NewmovieComponent{
    movie: Movie = {
        tittle: '',
        genres: '',
        price: 0,
        urlImage: '',
        details:[]
    }

    constructor(private movieDataService: MovieDataService){}

    save():void{
        if (this.validate(this.movie)){
            let result = this.movieDataService.addNewMovie(this.movie)
            if(result)  console.log("Saved Success");
            else{
                console.log("Error in save");
            }     
        }
    }

    validate(movie:Movie):boolean{
        if (movie.tittle =='') return false;
        if (movie.genres =='') return false;
        if (movie.price ==0) return false;
        return true;
    }
}
