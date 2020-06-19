import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Spaghetti', makeTime: 30 },
      { id: 12, name: 'Roast Chicken', makeTime: 30 },
      { id: 13, name: 'Shepherd\'s Pie', makeTime: 30 },
      { id: 14, name: 'Stir Fry', makeTime: 30 },
      { id: 15, name: 'Noodle Soup', makeTime: 30 },
      { id: 16, name: 'Pancakes', makeTime: 30 },
      { id: 17, name: 'Chocolate Cake', makeTime: 30 },
      { id: 18, name: 'Chicken Pie', makeTime: 30 },
      { id: 19, name: 'Chicken Curry', makeTime: 30 },
      { id: 20, name: 'Apple Crumble', makeTime: 30 }
    ];
    return {recipes};
  }

  genId(recipes: Recipe[]): number {
    return recipes.length > 0 ? Math.max(...recipes.map(recipe => recipe.id)) + 1 : 11;
  }
}
