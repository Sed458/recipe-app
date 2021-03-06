import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';

import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { IngredientUpdateComponent } from './ingredient-update/ingredient-update.component';
import { RecipeStepsComponent } from './recipe-steps/recipe-steps.component';
import { StepComponent } from './step/step.component';
import { StepUpdateComponent } from './step-update/step-update.component';
import { SnackBarSaveComponent } from './snack-bar-save/snack-bar-save.component';
import { SnackBarStepComponent } from './snack-bar-step/snack-bar-step.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipeDetailComponent,
    MessagesComponent,
    DashboardComponent,
    RecipeSearchComponent,
    RecipeUpdateComponent,
    IngredientComponent,
    IngredientUpdateComponent,
    RecipeStepsComponent,
    StepComponent,
    StepUpdateComponent,
    SnackBarSaveComponent,
    SnackBarStepComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatStepperModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatVideoModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
