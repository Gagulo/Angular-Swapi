import { Component, OnInit } from '@angular/core';

import { Planet } from '../model/planet';
import { PlanetsService } from '../services/planets.service';
import { Planets } from '../model/planets';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets: Planets;

  constructor(private planetsService: PlanetsService) {
    planetsService.getPlanets().subscribe(data => this.planets = data);
   }

  ngOnInit() { }

  getPlanets(): Planet[] {
    return this.planets.results;
  }

  morePlanets() {
    this.planetsService.getPlanets(this.planets.next).subscribe(data => {
      this.planets.results = this.planets.results.concat(data.results);
      this.planets.next = data.next;
    });
  }
}
