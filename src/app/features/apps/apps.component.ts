import { ClassField } from '@angular/compiler';
import {Component} from "@angular/core";
import { APPS_DATA } from 'src/app/common/models/mocks/apps-data.mock';

@Component ({
    selector: "apps-cmp",
    templateUrl: "./apps.component.html",
    styleUrls: ["./apps.component.scss"]
})

export class AppsComponent{
    appsModel: any = APPS_DATA;
}