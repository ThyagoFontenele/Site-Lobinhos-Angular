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


@NgModule({
  declarations: [
    AppComponent,
    WolfsComponent,
    WolfComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    WolfCardComponent,
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
