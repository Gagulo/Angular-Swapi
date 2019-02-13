import { Component, OnInit, Input } from '@angular/core';

import { PlanetService } from '../services/planet.service';
import { Planet } from '../model/planet';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.css']
})
export class PlanetListComponent implements OnInit {

  planets: Planet[];

  constructor(private service: PlanetService) { }

  ngOnInit() {
    this.service.callSwapi()
      .subscribe(data => this.planets = data);
  }

}
