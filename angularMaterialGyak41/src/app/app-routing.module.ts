import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CarReactiveFormComponent } from './car-reactive-form/car-reactive-form.component';
import { CarFilterComponent } from './car-filter/car-filter.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'carReactiveForm', component:CarReactiveFormComponent},
  {path: 'carFilter', component:CarFilterComponent},
  {path: 'notfound', component:NotFoundComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: '**', component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
