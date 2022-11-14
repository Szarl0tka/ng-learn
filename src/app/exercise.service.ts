import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Exercise } from './exercise';
import { EXERCISES } from './mock-exercises';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private exercisesUrl = 'api/exercises';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getExercises(): Observable<Exercise[]> {
  
    return this.http.get<Exercise[]>(this.exercisesUrl)
      .pipe(
        tap(_ => this.log('fetched exercises')),
        catchError(this.handleError<Exercise[]>('getExercises', []))
      );
  }


  getExercise(id: number): Observable<Exercise> {
    const url = `${this.exercisesUrl}/${id}`;
    return this.http.get<Exercise>(url).pipe(
      tap(_ => this.log(`fetched exercise id=${id}`)),
      catchError(this.handleError<Exercise>(`getExercise id=${id}`))
    );
  }

  /** POST: add a new exercise to the server */
  addExercise(exercise: Exercise): Observable<Exercise> {
    return this.http.post<Exercise>(this.exercisesUrl, exercise, this.httpOptions).pipe(
      tap((newExercise: Exercise) => this.log(`added exercise w/ id=${newExercise.id}`)),
      catchError(this.handleError<Exercise>('addExercise'))
    );
  }

  deleteExercise(id: number): Observable<Exercise> {
    const url = `${this.exercisesUrl}/${id}`;
    return this.http.delete<Exercise>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted exercise id=${id}`)),
      catchError(this.handleError<Exercise>('deleteExercise'))
    );
  }

  /* GET exercisees whose name contains search term */
  searchExercises(term: string): Observable<Exercise[]> {
    if (!term.trim()) {
      // if not search term, return empty exercise array.
      return of([]);
    }
    return this.http.get<Exercise[]>(`${this.exercisesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found exercises matching "${term}"`) :
        this.log(`no exercises matching "${term}"`)),
      catchError(this.handleError<Exercise[]>('searchExercises', []))
    );
  }
  /** Log a exerciseService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ExerciseService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  /** PUT: update the exercise on the server */
  updateExercise(exercise: Exercise): Observable<any> {
    return this.http.put(this.exercisesUrl, exercise, this.httpOptions).pipe(
      tap(_ => this.log(`updated exercise id=${exercise.id}`)),
      catchError(this.handleError<any>('updateExercise'))
    );
  }
}
