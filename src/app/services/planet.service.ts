import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Planet } from '../model/planet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  url = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

  callSwapi(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.url).pipe(
      map(data => {
        // tslint:disable-next-line:no-string-literal
        return data['results'];
      })
    );
  }
}
