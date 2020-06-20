import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'recipes', component: RecipeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: RecipeDetailComponent },
  { path: 'update/:id', component: RecipeUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
