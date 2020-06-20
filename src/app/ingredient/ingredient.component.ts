import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../ingredient';
import { INGREDIENTS } from '../mock-ingredients';

import { ActivatedRoute } from '@angular/router';

import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

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

  ngOnInit(): void {
    this.getIngredients();
  }

}
