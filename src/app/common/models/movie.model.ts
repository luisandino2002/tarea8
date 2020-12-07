import { Detail } from './detail.model';

export interface Movie {
    tittle: string;
    genres: string;
    price: number;
    urlImage:string;
    details: Detail[];
}