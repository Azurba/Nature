import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { BirdsComponent } from './Pages/birds/birds.component';
import { HeaderComponent } from './Components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FlowersComponent } from './Pages/flowers/flowers/flowers.component';
import { AnimalsComponent } from './Pages/animals/animals/animals.component';
import { LandscapesComponent } from './Pages/landscapes/landscapes/landscapes.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BirdsComponent,
    HeaderComponent,
    FlowersComponent,
    AnimalsComponent,
    LandscapesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    HttpClientModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
