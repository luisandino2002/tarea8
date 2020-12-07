import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component, OnInit } from "@angular/core";
import { MOVIES_DATA } from '../../common/models/mocks/movie-data.mock';
import {Router} from "@angular/router";
import { MovieDataService } from 'src/app/common/services/movie-data.service';

@Component ({
    selector: "movie-cmp",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.scss"]
})

export class MovieComponent implements OnInit{
  // movieModel: any = MOVIES_DATA;¨
  movieDetail: any;
  movieModel: any ;

  constructor(private router: Router, 
    private movieDataService:MovieDataService){}

  viewMovieDetail(detail:any):void{
   //this.router.navigate(['/movied',detail.starts])
  }

  ngOnInit():void{
    this.movieModel = this.movieDataService.getAllMovies();
  }

}
