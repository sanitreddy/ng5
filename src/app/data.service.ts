import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['AWS', 'Azure']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
  	this.goals.next(goal);
  }
}
