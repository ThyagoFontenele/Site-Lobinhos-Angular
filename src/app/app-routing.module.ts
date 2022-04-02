import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WolfComponent } from './components/wolf/wolf.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { OurWolvesPageComponent } from './components/our-wolves-page/our-wolves-page.component';
import { AddWolfComponent } from './components/add-wolf/add-wolf.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'our-wolves', component: OurWolvesPageComponent},
  {path: 'about-us', component: AboutPageComponent},
  {path: 'wolf/:id', component: WolfComponent},
  {path: 'wolf-add', component: AddWolfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
