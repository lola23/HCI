import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  @ViewChild('videoPlayer', {static: false}) videoplayer: ElementRef;

  constructor(
    private readonly router: Router,
  ) {
  }

  toggleVideo(): void {
    this.videoplayer.nativeElement.play();
  }

  videoEnded(): void {
    this.router.navigate(['/vestitorul', 1]);
  }
}
