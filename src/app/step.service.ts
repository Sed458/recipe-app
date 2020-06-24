import { Injectable } from '@angular/core';
import { Step } from './step';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  private stepsUrl = 'api/steps'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json ' })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getSteps(recipe_id: number): Observable<Step[]> {
    return this.http.get<Step[]>(`${this.stepsUrl}/?recipe_id=${recipe_id}`)
    .pipe(
      catchError(this.handleError<Step[]>('getSteps', []))
    );
  }

  /** POST: add a new step to the server */
  addStep(step: Step): Observable<Step> {
    return this.http.post<Step>(this.stepsUrl, step, this.httpOptions).pipe(
      tap((newStep: Step) => this.log(`added step w/ id=${newStep.id}`)),
      catchError(this.handleError<Step>('addStep'))
    )
  }

  /** DELETE: delete the recipe from the server */
  deleteStep(step: Step | number): Observable<Step> {
    const id = typeof step === 'number' ? step : step.id;
    const url = `${this.stepsUrl}/${id}`;

    return this.http.delete<Step>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted step id=${id}`)),
      catchError(this.handleError<Step>('deleteStep'))
    );
  }

  /** PUT: update the step on the server  */
  updateStep(step: Step): Observable<any>{
    return this.http.put(this.stepsUrl, step, this.httpOptions).pipe(
      tap(_ => this.log(`updated step id=${step.id}`)),
      catchError(this.handleError<any>('updateStep'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`RecipeService: ${message}`);
  }
}
