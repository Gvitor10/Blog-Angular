import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeTitleComponent } from './components/home-title/home-title.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { OtherCardComponent } from './components/other-card/other-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeTitleComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    OtherCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
