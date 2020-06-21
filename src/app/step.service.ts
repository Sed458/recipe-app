import { Injectable } from '@angular/core';
import { Steps } from './steps';

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

  getSteps(recipe_id: number): Observable<Steps[]> {
    return this.http.get<Steps[]>(`${this.stepsUrl}/?recipe_id=${recipe_id}`)
    .pipe(
      catchError(this.handleError<Steps[]>('getSteps', []))
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
