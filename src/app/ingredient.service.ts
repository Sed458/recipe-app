import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ingredient } from './ingredient';
import { INGREDIENTS } from './mock-ingredients';

import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredientsUrl = 'api/ingredients'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json ' })
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getIngredients(recipe_id: number): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.ingredientsUrl}/?recipe_id=${recipe_id}`)
    .pipe(
      catchError(this.handleError<Ingredient[]>('getIngredients', []))
    );
  }

  /** POST: add a new ingredient to the server */
  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.ingredientsUrl, ingredient, this.httpOptions).pipe(
      tap((newIngredient: Ingredient) => this.log(`added recipe w/ id=${newIngredient.id}`)),
      catchError(this.handleError<Ingredient>('addIngredient'))
    )
  }

   /** DELETE: delete the ingredient from the server */
   deleteRecipe(recipe: Ingredient | number): Observable<Ingredient> {
    const id = typeof recipe === 'number' ? recipe : recipe.id;
    const url = `${this.ingredientsUrl}/${id}`;

    return this.http.delete<Ingredient>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted recipe id=${id}`)),
      catchError(this.handleError<Ingredient>('deleteRecipe'))
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
