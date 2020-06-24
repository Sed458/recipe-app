import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { Step } from '../step';

import { SnackBarSaveComponent } from '../snack-bar-save/snack-bar-save.component';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../recipe.service';
import { StepService } from '../step.service';
import { MessageService } from '../message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-step-update',
  templateUrl: './step-update.component.html',
  styleUrls: ['./step-update.component.css']
})
export class StepUpdateComponent implements OnInit {

  recipe: Recipe;
  steps: Step[];

  durationInSeconds = 5;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private stepService: StepService,
    private messageService: MessageService,
    private location: Location,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getRecipe();
    this.getSteps();
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
      });
  }

  goBack(): void {
    this.location.back();
  }

  addImage(step: Step, image_url: string): void {
    step.images.push(image_url)
  }

  addVideo(step: Step, video_url: string): void {
    step.videos.push(video_url);
  }

  deleteImage(step: Step, image_url: string): void {

  }

  deleteVideo(step: Step, video_url: string): void {

  }

  add(title: string, step_number: number, description: string, recipe_id: number, step_image: string, step_video: string): void {
    title = title.trim();
    if (!title) { return; }
    if (!step_number) { step_number = this.steps.length + 1 }

    if (step_number != this.steps.length + 1){
      this.steps.forEach(s => { 
        if (s.step_number >= step_number) {
          s.step_number += 1;
          this.save(s);
        }
      });
    }
    let images = [];
    let videos = [];

    if (step_image) {
      const valid = ['webp', 'jpg', 'png']
      let extn = step_image.substr(step_image.lastIndexOf('.')+1);
      if (valid.includes(extn)) {
        images = [step_image]
      }
    }
    if (step_video) {
      let extn = step_video.substr(step_video.lastIndexOf('.')+1);
      if (extn === "mp4") {
        videos = [step_video]
      }
    }
    this.stepService.addStep({ title, description, recipe_id, step_number, images, videos } as Step)
      .subscribe(step => {
        if (step_number != this.steps.length + 1){
          for(let ind = 0; ind < this.steps.length; ind++) { 
            this.messageService.add(`${this.steps[ind].step_number + 1}, ${step_number}, ${this.steps[ind].step_number + 1 == step_number}`)
            if (this.steps[ind].step_number + 1 == step_number) {
              this.steps.splice(ind + 1, 0, step);
              break;
            }
          }
        } else {
          this.steps.push(step);
        }
      });
  }

  delete(step: Step): void {
    const step_number = step.step_number;
    this.steps = this.steps.filter(s => { 
      if (s.step_number > step_number) {
        s.step_number -= 1;
        this.save(s);
      }
      return s !== step;
    });
    this.stepService.deleteStep(step).subscribe();
  }

  save(step: Step): void {
    this.stepService.updateStep(step)
      .subscribe();
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarSaveComponent, {
      duration: this.durationInSeconds * 500,
    });
  }
}
