import { Injectable } from '@angular/core';
import { Detail } from '../models/detail.model';
import { MOVIES_DATA } from '../models/mocks/movie-data.mock';
import { Movie } from '../models/movie.model';

@Injectable ({providedIn:'root'})
export class MovieDataService {
    constructor(){}

    getAllMovies(): Movie[] {
        return MOVIES_DATA;
    }

    //getMoviegById(): Detail {
        //return MOVIES_DATA.
    //}
    addNewMovie(movie: Movie): boolean{
        try {
            MOVIES_DATA.push(movie);

            return true;
        }catch (error){
            return false;
        }
        
    }


}