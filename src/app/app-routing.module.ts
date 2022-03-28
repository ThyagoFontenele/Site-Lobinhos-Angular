import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WolfComponent } from './components/wolf/wolf.component';
import { WolfsComponent } from './components/wolfs/wolfs.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'lobo/:id', component: WolfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
