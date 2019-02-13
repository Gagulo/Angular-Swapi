import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Planets } from '../model/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(url?: string) {
    return this.http.get<Planets>(url ? url : `https://swapi.co/api/planets/`);
  }
}
