import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { GameControllerService } from 'src/app/services/game-controller.service';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  options: AnimationOptions = {
    path: './../../../assets/lottie-animations/witch-hit-stick.json',
  };
  tileCenters:any = [];
  mapHeight:string = '200px';
  constructor(
    public mapGeneratorService: MapGeneratorService,
    public gameControllerService: GameControllerService,
  ) { }

  ngOnInit(): void {
    this.mapGeneratorService.initializeTiles();
    console.log(this.mapGeneratorService.wizard.percentX)
    console.log(this.mapGeneratorService.wizard.percentY)
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
