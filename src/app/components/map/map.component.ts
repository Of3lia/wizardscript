import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList, HostListener } from '@angular/core';
import { TileStyler } from '@angular/material/grid-list/tile-styler';
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
    public mapGeneratorService: MapGeneratorService
  ) { }

  ngOnInit(): void {
    // this.mapGeneratorService.generateMap();
    this.mapGeneratorService.initializeTiles();
    console.log(this.mapGeneratorService.tiles);
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
