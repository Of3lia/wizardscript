import { Component, OnInit } from '@angular/core';
import { GameControllerService } from 'src/app/services/game-controller.service';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  tileCenters:any = [];
  mapHeight:string = '200px';
  constructor(
    public mapGeneratorService: MapGeneratorService,
    public gameControllerService: GameControllerService,
  ) { }

  ngOnInit(): void {
    this.mapGeneratorService.initializeTiles();
  }
}
