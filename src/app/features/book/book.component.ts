import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component} from "@angular/core"
import { BOOKS_DATA } from 'src/app/common/models/mocks/book-data.mock';

@Component ({
    selector: "book-cmp",
    templateUrl: "./book.component.html",
    styleUrls: ["./book.component.scss"]
})

export class BookComponent{
    bookModel:any= BOOKS_DATA;
}