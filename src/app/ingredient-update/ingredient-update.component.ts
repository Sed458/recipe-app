import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';

import { ActivatedRoute } from '@angular/router';

import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-update',
  templateUrl: './ingredient-update.component.html',
  styleUrls: ['./ingredient-update.component.css']
})
export class IngredientUpdateComponent implements OnInit {

  @Input() ingredients: Ingredient[];

  checked = false;

  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
  ) { }

  getIngredients(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ingredientService.getIngredients(id)
      .subscribe(ingredients => this.ingredients = ingredients);
  }

  add(name: string, quantity: string): void {
    name = name.trim();
    if (!name) { return; }
    const recipe_id = +this.route.snapshot.paramMap.get('id');
    this.ingredientService.addIngredient({ name, quantity, recipe_id } as Ingredient)
      .subscribe(ingredients => {
        this.ingredients.push(ingredients)
      });
  }

  delete(recipe: Ingredient): void {
    this.ingredients = this.ingredients.filter(r => r !== recipe);
    this.ingredientService.deleteIngredient(recipe).subscribe();
  }

  ngOnInit(): void {
    this.getIngredients();
  }

}
