import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Howl} from "howler";

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  congratsSound = new Howl({
    src: ['assets/audio/felicitari.mp4'],
    volume: 1
  });

  replaySound = new Howl({
    src: ['assets/audio/replay.mp4'],
    volume: 1
  });

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.congratsSound.play();
  }

  startVideo(): void {
    // add delay for "Acum hai sa ne jucam" audio
    this.router.navigate(['video']);
  }

  stopAllSound(): void {
    this.congratsSound.stop();
    this.replaySound.stop();
  }

  over(): void {
    this.stopAllSound();
    this.replaySound.play();
  }

  overCongrats(): void {
    this.stopAllSound();
    this.congratsSound.play();
  }

  out(): void {
    this.replaySound.stop();
  }
}
