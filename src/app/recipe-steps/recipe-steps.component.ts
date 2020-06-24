import { Component, OnInit } from '@angular/core';
import { Step } from '../step';

import { ActivatedRoute } from '@angular/router';

import { StepService } from '../step.service';

@Component({
  selector: 'app-recipe-steps',
  templateUrl: './recipe-steps.component.html',
  styleUrls: ['./recipe-steps.component.css']
})
export class RecipeStepsComponent implements OnInit {

  steps: Step[];

  constructor(
    private stepService: StepService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getSteps();
  }

  getSteps(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.stepService.getSteps(id)
      .subscribe(steps => this.steps = steps.sort((x, y) => x.step_number - y.step_number));
  }
}
