import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { Steps } from '../steps';

import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../recipe.service';
import { StepService } from '../step.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  recipe: Recipe;
  steps: Steps[];

  currentStep: Steps;
  currentIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private stepService: StepService,
  ) { }

  ngOnInit(): void {
    this.getRecipe();
    this.getSteps();
  }

  prev(): void {
    if (this.currentIndex - 1 >= 0){
      this.currentIndex -= 1;
      this.currentStep = this.steps[this.currentIndex]
    }
  }

  next(): void {
    if (this.currentIndex + 1 < this.steps.length){
      this.currentIndex += 1;
      this.currentStep = this.steps[this.currentIndex]
    }
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipeService.getRecipe(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  getSteps(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stepService.getSteps(id)
      .subscribe(steps => {
        this.steps = steps.sort((x, y) => x.step_number - y.step_number);
        this.currentStep = this.steps[0];
      });
  }
}
