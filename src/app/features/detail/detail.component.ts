import {Component, Input} from "@angular/core";
import { Detail} from "src/app/common/models/detail.model";
@Component ({
    selector: "detail-cmp",
    templateUrl : "./detail.component.html",
    styleUrls: ["./detail.component.scss"],
})

export class DetailComponent {
    @Input() detail: Detail; 
}