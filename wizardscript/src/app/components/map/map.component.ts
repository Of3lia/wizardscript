import { Component, OnInit } from '@angular/core';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(
    public mapGeneratorService: MapGeneratorService
  ) { }

  ngOnInit(): void {
    this.mapGeneratorService.generateMap();
  }

  public check(e:any){
    console.log(e.getBoundingClientRect());
  }

}
