import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  constructor(
    private readonly router: Router,
  ) { }

  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;

  toggleVideo(): void {
    this.videoplayer.nativeElement.play();
  }

  videoEnded(): void {
    this.router.navigate(['/vestitorul', 1]);
  }
}
