import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
    // Reset Local Storage Value in case it is messed up to a number higher that the number of levels
    localStorage.level =1;
  }

  goToLevelSelectionMenu(){
    this.router.navigateByUrl('level-menu')
  }
}
