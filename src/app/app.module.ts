import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { VideoComponent } from './modules/video/video.component';
import { VestitorulComponent } from './modules/vestitorul/vestitorul.component';
import { FormaGeometricaComponent } from './modules/forma-geometrica/forma-geometrica.component';
import { NumaratoareComponent } from './modules/numaratoare/numaratoare.component';
import { LimbaComponent } from './modules/limba/limba.component';
import { MediuComponent } from './modules/mediu/mediu.component';
import { AppRoutingModule } from './app.routing.module';

import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    VestitorulComponent,
    FormaGeometricaComponent,
    NumaratoareComponent,
    LimbaComponent,
    MediuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
