import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  url = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }
}
