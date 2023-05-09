import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { BirdsComponent } from './Pages/birds/birds.component';
import { FlowersComponent } from './Pages/flowers/flowers/flowers.component';
import { AnimalsComponent } from './Pages/animals/animals/animals.component';
import { LandscapesComponent } from './Pages/landscapes/landscapes/landscapes.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}, //make the 'home' the default path
  {path: 'birds', component: BirdsComponent},
  {path: 'flowers', component: FlowersComponent},
  {path: 'animals', component: AnimalsComponent},
  {path: 'landscape', component: LandscapesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
