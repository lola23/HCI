import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from './modules/video/video.component';
import {HomeComponent} from './modules/home/home.component';
import {VestitorulComponent} from './modules/vestitorul/vestitorul.component';

const routes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'video',
    component: VideoComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: 'vestitorul/:id',
    component: VestitorulComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
