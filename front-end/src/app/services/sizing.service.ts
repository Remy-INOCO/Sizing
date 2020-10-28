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
     return this.httpClient.get<ISizing>('http://localhost:8080/human');
  }

  getDataWithParam(referenceName: string, compareValue: 'lower' | 'taller'): Observable<ISizing> {
    return this.httpClient.get<ISizing>(`http://localhost:8080/item?name=${referenceName}&size=${compareValue}`);
  }
}
