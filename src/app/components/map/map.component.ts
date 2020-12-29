import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, HostListener } from '@angular/core';
import { TileStyler } from '@angular/material/grid-list/tile-styler';
import { UnitMovement } from 'src/app/models/gameModels';
import { GameControllerService } from 'src/app/services/game-controller.service';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  // @ViewChild('unit') myDiv: ElementRef | undefined;
  // @ViewChildren('tileCenter') components?:QueryList<any>;
  tileCenters:any = [];
  constructor(
    public mapGeneratorService: MapGeneratorService,
    public gameControllerService: GameControllerService,
  ) { }

  ngOnInit(): void {
    // this.mapGeneratorService.generateMap();
    this.mapGeneratorService.initializeTiles();
    this.gameControllerService.initUpdate();
    // this.mapGeneratorService.units[0].moveTo("Right");

    // console.log(this.mapGeneratorService.units[0]);
    // console.log(this.mapGeneratorService.tiles[8]);
  }

  // ngAfterViewInit() {
  //   // console.log(this.myDiv?.nativeElement.getBoundingClientRect().y);
  //   this.components?.forEach(element => {
  //     this.tileCenters.push(element);  
  //   });
  //   console.log(this.tileCenters[0].nativeElement.getBoundingClientRect().y);
  // }

  // @HostListener('window:resize', ['$event'])
  //   onResize(event: any) {
  //     console.log("asd");
  // }

  // public check(e:any){
  //   console.log(e.getBoundingClientRect());
  // }
}
