import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Howl} from 'howler';

@Component({
  selector: 'app-mediu',
  templateUrl: './mediu.component.html',
  styleUrls: ['./mediu.component.css']
})
export class MediuComponent implements OnInit {

  level: number;
  answer;
  image1;
  image2;
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
    // this.loadLevel1();
    this.sound.play();
    this.setFeedbacks();

    this.route.params.subscribe(params => {
      this.level = parseInt(params.id, 10);
      switch (this.level) {
        case 1:
        {
          this.loadLevel1();
          this.setFeedbacks();
          console.log(this.level);
          break;
        }
        case 2:
        {
          this.loadLevel2();
          this.setFeedbacks();
          console.log(this.level);
          break;
        }
        case 3:
        {
          this.setFeedbacks();
          console.log(this.level);
          break;
        }
      }
    });
  }

  loadLevel1(): void {
    console.log('Loading level');
    this.answer = 2;
    this.image1 = 'assets/images/mediu/winnie-flowers.jpg';
    this.image2 = 'assets/images/mediu/winnie-water.jpg';

    // this.answer = 1;
    // this.progress = 0;
  }

  loadLevel2(): void {
    console.log('Loading level');
    this.answer = 1;
    this.image1 = 'assets/images/mediu/winnie-honey-good.png';
    this.image2 = 'assets/images/mediu/winnie-honey.png';

    // this.answer = 1;
    // this.progress = 0;
  }

  handleClick(index: number): void {
    switch (index) {
      case this.answer: {
        document.getElementById('good-feedback').hidden = false;
        this.congratsSound.play();
        // add happy winnie
        if (this.level < 2) {
          while (!this.congratsSound.pause()) {
            // do nothing
          }
          this.router.navigate(['/mediu', this.level + 1]);
        } else {
          this.router.navigate(['/mediu', 1]);
        }
        break;
      }
      default: {
        document.getElementById('wrong-feedback').hidden = false;
        this.tryAgainSound.play();
        break;
      }
    }
  }

  over(): void{
      this.sound.play();
  }

  out(): void{
    this.sound.stop();
  }

  setFeedbacks(): void {
    document.getElementById('wrong-feedback').hidden = true;
    document.getElementById('good-feedback').hidden = true;

    if (this.answer === 1) {
      console.log('feedbacks answer == 1');
      document.getElementById('wrong-feedback').style.top = '50%';
      document.getElementById('wrong-feedback').style.left = '80%';
      // document.getElementById('wrong-feedback').setAttribute('top', '50%');
      // document.getElementById('wrong-feedback').setAttribute('left', '25%');

      document.getElementById('good-feedback').style.top = '30%';
      document.getElementById('good-feedback').style.left = '25%';
    } else {
      console.log('feedbacks answer == 2');

      document.getElementById('wrong-feedback').style.top = '50%';
      document.getElementById('wrong-feedback').style.left = '25%';
      // document.getElementById('wrong-feedback').setAttribute('top', '50%');
      // document.getElementById('wrong-feedback').setAttribute('left', '25%');

      document.getElementById('good-feedback').style.top = '30%';
      document.getElementById('good-feedback').style.left = '80%';

      // document.getElementById('good-feedback').setAttribute('top', '30%');
      // document.getElementById('good-feedback').setAttribute('left', '80%');
    }
  }
}
