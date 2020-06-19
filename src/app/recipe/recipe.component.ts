import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { MessageService } from '../message.service'; 

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  delete(recipe: Recipe): void {
    this.recipes = this.recipes.filter(r => r !== recipe);
    this.recipeService.deleteRecipe(recipe).subscribe();
  }

}
