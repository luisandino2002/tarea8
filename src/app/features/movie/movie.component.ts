import { sharedStylesheetJitUrl } from '@angular/compiler';
import { Component } from "@angular/core";
import { MOVIES_DATA } from '../../common/models/mocks/movie-data.mock';

@Component ({
    selector: "movie-cmp",
    templateUrl: "./movie.component.html",
    styleUrls: ["./movie.component.scss"]
})

export class MovieComponent{
  // movieModel: any = MOVIES_DATA;¨
  movieDetail: any;
  movieModel: any = MOVIES_DATA;

  viewMovieDetail(detail:any):void{
    this.movieDetail = detail;
  }
}
