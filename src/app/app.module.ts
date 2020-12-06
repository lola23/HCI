import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './modules/home/home.component';
import {VideoComponent} from './modules/video/video.component';
import {VestitorulComponent} from './modules/vestitorul/vestitorul.component';
import {FormaGeometricaComponent} from './modules/forma-geometrica/forma-geometrica.component';
import {NumaratoareComponent} from './modules/numaratoare/numaratoare.component';
import {LimbaComponent} from './modules/limba/limba.component';
import {MediuComponent} from './modules/mediu/mediu.component';
import {AppRoutingModule} from './app.routing.module';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogGresealaComponent} from './shared/dialog-greseala/dialog-greseala.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogCorectComponent} from './shared/dialog-corect/dialog-corect.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideoComponent,
    VestitorulComponent,
    FormaGeometricaComponent,
    NumaratoareComponent,
    LimbaComponent,
    MediuComponent,
    DialogGresealaComponent,
    DialogCorectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressBarModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
