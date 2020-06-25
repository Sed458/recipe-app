import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { Ingredient } from '../ingredient';
import { SnackBarSaveComponent } from '../snack-bar-save/snack-bar-save.component';


import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.css']
})
export class RecipeUpdateComponent implements OnInit {
  @Input() recipe: Recipe;

  durationInSeconds = 5;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getRecipe();
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.recipeService.updateRecipe(this.recipe)
      .subscribe(() => this.goBack());
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarSaveComponent, {
      duration: this.durationInSeconds * 500,
    });
  }

}
