import { Component, OnInit } from '@angular/core';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-game-scene',
  templateUrl: './game-scene.component.html',
  styleUrls: ['./game-scene.component.scss']
})
export class GameSceneComponent implements OnInit {

  constructor(
    public mapGeneratorService:MapGeneratorService
  ) { }

  ngOnInit(): void {
  }

}
