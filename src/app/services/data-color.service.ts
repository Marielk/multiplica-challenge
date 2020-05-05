import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Colour, DataApi } from './colors';

@Injectable({
  providedIn: 'root'
})
export class DataColorService {
  colorUrl = 'https://reqres.in/api/colors';
  constructor(private http: HttpClient) { }

  getColors(pageNum?: number): Observable<DataApi> {
    if (pageNum) {
      return this.http.get<DataApi>(`${this.colorUrl}?page=${pageNum}`);
    } else {
      return this.http.get<DataApi>(`${this.colorUrl}`);
    }
  }

}
