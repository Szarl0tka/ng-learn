import { Component, OnInit } from '@angular/core';

import { Exercise } from '../exercise';
import { ExerciseService } from '../exercise.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {
  
  exercises: Exercise[] = [];

  constructor(private exerciseService: ExerciseService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getExercises();
  }

  getExercises(): void {
    this.exerciseService.getExercises()
        .subscribe(exercises => this.exercises = exercises);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.exerciseService.addExercise({ name } as Exercise)
      .subscribe(exercise => {
        this.exercises.push(exercise);
      });
  }

  delete(exercise: Exercise): void {
    this.exercises = this.exercises.filter(h => h !== exercise);
    this.exerciseService.deleteExercise(exercise.id).subscribe();
  }
}
