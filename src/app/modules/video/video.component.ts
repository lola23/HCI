import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {

  @ViewChild('videoPlayer', { static: false }) videoplayer: ElementRef;


  toggleVideo(): void {
    this.videoplayer.nativeElement.play();
  }

}
