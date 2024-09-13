import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  } from "module";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllCitiesList(): Observable<any> {
    return this.http.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
      headers: {
        'x-rapidapi-key': '9d2c266c7fmshf6843ebc7b6db44p15bd28jsnb47c3af8ef05',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
      }, withCredentials: true
    })
  }
}
