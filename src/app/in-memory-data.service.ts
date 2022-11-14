import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Exercise } from './exercise';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const exercises = [
      { id: 12, name: 'Crunch' },
      { id: 13, name: 'Pompes' },
      { id: 14, name: 'Superman' },
      { id: 15, name: 'Chandelle' },
      { id: 16, name: 'Bouche incendie' },
      { id: 17, name: 'Jumping Jack' },
      { id: 18, name: 'Levé de jambes' },
      { id: 19, name: 'Gainage' },
      { id: 20, name: 'Chien tête en bas' }
    ];
    return {exercises};
  }

  // Overrides the genId method to ensure that a exercise always has an id.
  // If the exercisees array is empty,
  // the method below returns the initial number (11).
  // if the exercisees array is not empty, the method below returns the highest
  // exercise id + 1.
  genId(exercises: Exercise[]): number {
    return exercises.length > 0 ? Math.max(...exercises.map(exercise => exercise.id)) + 1 : 11;
  }
}