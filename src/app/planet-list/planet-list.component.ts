import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Planet } from '../model/planet';
import { PlanetService } from '../services/planet.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  constructor(private http: HttpClient,
              private service: PlanetService) { }

  ngOnInit() {
   /*  this.http.get('https://swapi.co/api/planets/')
    .subscribe((response) => {
      const planet = response;
      console.log(planet);
    }); */
  }

  onGet() {
    this.service.callSwapi()
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
