import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Howl} from 'howler';

@Component({
  selector: 'app-mediu',
  templateUrl: './mediu.component.html',
  styleUrls: ['./mediu.component.css']
})
export class MediuComponent implements OnInit {

  level: number;
  answer;
  correctImage;
  wrongImage;
  progress = 63;
  sound = new Howl({
    src: ['assets/audio/winnie-mediu.mp4'],
    volume: 1,
  });
  tryAgainSound = new Howl({
    src: ['assets/audio/maiIncearca.mp3'],
    volume: 1,
  });
  congratsSound = new Howl({
    src: ['assets/audio/bravo.mp3'],
    volume: 1
  });

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.level = 1;
    // this.loadLevel2();
    this.sound.play();

    this.route.params.subscribe(params => {
      this.level = parseInt(params.id, 10);
      switch (this.level) {
        case 1: {
          this.loadLevel1();
          console.log(this.level);
          break;
        }
        case 2: {
          this.loadLevel2();
          console.log(this.level);
          break;
        }
        case 3: {
          this.loadLevel3();
          console.log(this.level);
          break;
        }
      }
    });
  }

  stopAllSound(): void {
    this.congratsSound.stop();
    this.tryAgainSound.stop();
    this.sound.stop();
  }
  loadLevel1(): void {
    console.log('Loading level');
    this.answer = 1;
    this.correctImage = 'assets/images/mediu/child.png';
    this.wrongImage = 'assets/images/mediu/child-birds-bad.png';
  }

  loadLevel2(): void {
    console.log('Loading level');
    this.answer = 2;
    this.correctImage = 'assets/images/mediu/litter.png';
    this.wrongImage = 'assets/images/mediu/litter-good.png';
    this.progress = 70;
  }

  loadLevel3(): void {
    console.log('Loading level');
    this.answer = 2;
    this.correctImage = 'assets/images/mediu/winnie-flowers-bad.png';
    this.wrongImage = 'assets/images/mediu/winnie-flowers-good.png';
    this.progress = 77;
  }

  handleClick(index: number): void {
    switch (index) {
      case this.answer: {
        this.stopAllSound();
        this.congratsSound.play();
        (document.getElementById('winnie-thinking') as HTMLImageElement).src = 'assets/images/mediu/yes.gif';
        setTimeout(() => {
          (document.getElementById('winnie-thinking') as HTMLImageElement).src = 'assets/images/mediu/winnie-loop.gif';
          if (this.level < 3) {
            this.router.navigate(['/mediu', this.level + 1]);
          } else {
            this.router.navigate(['/limba', 1]);
          }
        }, 2200);
        break;
      }
      default: {
        this.stopAllSound();
        this.tryAgainSound.play();
        (document.getElementById('winnie-thinking') as HTMLImageElement).src = 'assets/images/mediu/no.gif';
        setTimeout(() => {
          (document.getElementById('winnie-thinking') as HTMLImageElement).src = 'assets/images/mediu/winnie-loop.gif';

        }, 2200);
        break;
      }
    }
  }

  over(): void {
    this.stopAllSound();
    this.sound.play();
  }

  out(): void {
    this.sound.stop();
  }
}
