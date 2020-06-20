import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const recipes = [
      { id: 11, name: 'Spaghetti', makeTime: 30, imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg' },
      { id: 12, name: 'Roast Chicken', makeTime: 30, imageUrl: '' },
      { id: 13, name: 'Shepherd\'s Pie', makeTime: 30, imageUrl: '' },
      { id: 14, name: 'Stir Fry', makeTime: 30, imageUrl: '' },
      { id: 15, name: 'Noodle Soup', makeTime: 30, imageUrl: '' },
      { id: 16, name: 'Pancakes', makeTime: 30, imageUrl: '' },
      { id: 17, name: 'Chocolate Cake', makeTime: 30, imageUrl: '' },
      { id: 18, name: 'Chicken Pie', makeTime: 30, imageUrl: '' },
      { id: 19, name: 'Chicken Curry', makeTime: 30, imageUrl: '' },
      { id: 20, name: 'Apple Crumble', makeTime: 30, imageUrl: '' }
    ];

    const ingredients = [
      { id: 11, name: 'Ground Beef', recipe_id: 11, quantity: "1 pound" },
      { id: 12, name: "Onion", recipe_id: 11, quantity: ""},
      { id: 13, name: "Chocolate Bar", recipe_id: 12, quantity: ""},
      { id: 14, name: "Butter", recipe_id: 13, quantity: ""},
  ];
    return { recipes, ingredients };
  }

  genId<T extends Recipe | Ingredient>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 11;
  }
}
