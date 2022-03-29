import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { WolfsComponent } from './components/wolfs/wolfs.component';
import { WolfComponent } from './components/wolf/wolf.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WolfCardComponent } from './components/wolf-card/wolf-card.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { OurWolvesPageComponent } from './components/our-wolves-page/our-wolves-page.component';


@NgModule({
  declarations: [
    AppComponent,
    WolfsComponent,
    WolfComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    WolfCardComponent,
    AboutPageComponent,
    OurWolvesPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
