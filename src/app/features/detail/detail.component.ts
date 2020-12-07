import {Component, Input, OnInit} from "@angular/core";
import { Detail} from "src/app/common/models/detail.model";
import {MOVIES_DATA} from "../../common/models/mocks/movie-data.mock";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "src/app/common/models/movie.model";

@Component ({
    selector: "detail-cmp",
    templateUrl : "./detail.component.html",
    styleUrls: ["./detail.component.scss"],
})

export class DetailComponent implements OnInit {
    data: Movie[] = MOVIES_DATA;
    detail: Detail; 

    constructor(private activeRoute:ActivatedRoute) {}

    ngOnInit():void{
        const name = this.activeRoute.snapshot.paramMap.get('name');

        console.log("Parametro name " + this.activeRoute.snapshot.paramMap.get('name'));
        console.log("Parametro type " +this.activeRoute.snapshot.paramMap.get('type'));

        //busqueda.
       // this.detail= this.data.detail.find((t) => t.date==name)

    }
}