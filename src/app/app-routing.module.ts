import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WolfComponent } from './components/wolf/wolf.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { OurWolvesPageComponent } from './components/our-wolves-page/our-wolves-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'our-wolves', component: OurWolvesPageComponent},
  {path: 'quem-somos', component: AboutPageComponent},
  {path: 'lobo/:id', component: WolfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
