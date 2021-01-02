import { Injectable } from '@angular/core';
import { LEVELS } from '../data/levels';
import { Level } from '../models/gameModels';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  levels:Level[]=LEVELS;
  constructor() { }
}
