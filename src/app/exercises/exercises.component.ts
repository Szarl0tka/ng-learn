import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  
  exercise: Exercise = {
    id: 1,
    name: 'Squats'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
