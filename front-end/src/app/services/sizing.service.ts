import { Injectable } from '@angular/core';
import { ISizing } from '../models/sizing';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SizingService {

  constructor(private httpClient: HttpClient) { }

  getInitData(): Observable<ISizing> {
     return this.httpClient.get<ISizing>('localhost:8080/human');

    // return of({ name: 'Homo sapiens',
    //   size: 170,
    //   weight: 62,
    //   imageUrl: 'https://i.pinimg.com/736x/83/6a/9b/836a9b18adaa21e843116bfde0cba594.jpg',
    //   wikiUrl: 'https://en.wikipedia.org/wiki/Human',
    //   description: 'Humans (Homo sapiens) are a species of highly intelligent primates ',
    // });
  }

  getDataWithParam(referenceName: string, compareValue: 'lower' | 'taller'): Observable<ISizing> {
    return this.httpClient.get<ISizing>(`localhost:8080/item?name=${referenceName}&size=${compareValue}`);
  }
}
