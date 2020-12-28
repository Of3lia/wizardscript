import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Unit } from 'src/app/models/gameModels';
import { MapGeneratorService } from 'src/app/services/map-generator.service';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {

  wizScript:any;

  constructor(
    private mapGeneratorService:MapGeneratorService
  ) { }

  wizard:Unit = this.mapGeneratorService.units[0];

  ngOnInit(): void {
    console.log(this.wizScript);

  }

  ngAfterViewInit() {
    console.log(this.wizScript);
  }

  runScript(){
    eval(this.wizScript);
  }
}
