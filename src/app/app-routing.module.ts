import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesComponent } from './exercises/exercises.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExerciseDetailComponent } from './exercise-detail/exercise-detail.component';
import { MotionsListComponent } from './motions-list/motions-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exercises', component: ExercisesComponent },
  { path: 'detail/:id', component: ExerciseDetailComponent },
  { path: 'database', component: MotionsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

