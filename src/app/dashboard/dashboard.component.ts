import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes.slice(recipes.length - 4, recipes.length));
  }

  add(name: string, makeTime: number): void {
    name = name.trim();
    if (!name) { return; }
    this.recipeService.addRecipe({ name, makeTime } as Recipe)
      .subscribe(recipe => {
        this.recipes.shift()
        this.recipes.push(recipe)
      });
  }

}
