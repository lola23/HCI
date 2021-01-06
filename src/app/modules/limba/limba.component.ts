import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogGresealaComponent} from '../../shared/dialog-greseala/dialog-greseala.component';
import {DialogCorectComponent} from '../../shared/dialog-corect/dialog-corect.component';
import {Howl} from 'howler';

@Component({
  selector: 'app-limba',
  templateUrl: './limba.component.html',
  styleUrls: ['./limba.component.css']
})
export class LimbaComponent implements OnInit {

  modul = new Howl({
    src: ['assets/audio/limba/modul.m4a'],
    volume: 1,
  });

  cerinta;
  option1audio;
  option2audio;
  option3audio;
  image1;
  image2;
  image3;
  level;
  sentence;
  option1;
  option2;
  option3;
  answer;
  progress = 84;
  wrong1 = false;
  wrong2 = false;
  wrong3 = false;
  dialogRef;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              public readonly dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.level = parseInt(params.id, 10);
      this.resetWrongs();
      switch (this.level) {
        case 1: {
          this.cerinta = new Howl({
            src: ['assets/audio/limba/cerinta1.m4a'],
            volume: 1,
          });

          this.option1audio = new Howl({
            src: ['assets/audio/limba/option11.m4a'],
            volume: 1,
          });
          this.option2audio = new Howl({
            src: ['assets/audio/limba/option12.m4a'],
            volume: 1,
          });
          this.option3audio = new Howl({
            src: ['assets/audio/limba/option13.m4a'],
            volume: 1,
          });

          this.modul.play();
          this.modul.on('end', () => {
            this.cerinta.play();
          });
          this.loadLevel1();
          break;
        }
        case 2: {
          this.cerinta = new Howl({
            src: ['assets/audio/limba/cerinta2.m4a'],
            volume: 1,
          });
          this.option1audio = new Howl({
            src: ['assets/audio/limba/option21.m4a'],
            volume: 1,
          });
          this.option2audio = new Howl({
            src: ['assets/audio/limba/option22.m4a'],
            volume: 1,
          });
          this.option3audio = new Howl({
            src: ['assets/audio/limba/option23.m4a'],
            volume: 1,
          });
          this.cerinta.play();
          this.loadLevel2();
          break;
        }
        case 3: {
          this.cerinta = new Howl({
            src: ['assets/audio/limba/cerinta3.m4a'],
            volume: 1,
          });
          this.option1audio = new Howl({
            src: ['assets/audio/limba/option31.m4a'],
            volume: 1,
          });
          this.option2audio = new Howl({
            src: ['assets/audio/limba/option32.m4a'],
            volume: 1,
          });
          this.option3audio = new Howl({
            src: ['assets/audio/limba/option33.m4a'],
            volume: 1,
          });
          this.cerinta.play();
          this.loadLevel3();
          break;
        }
      }
    });
  }

  loadLevel1(): void {

    this.sentence = '   Ghioceii sunt ...';
    this.option1 = 'gingași';
    this.option2 = 'roz';
    this.option3 = 'murdari';
    this.image1 = 'assets/images/vestitorii/ghiocel.png';
    this.image2='assets/images/pink.png';
    this.image3='assets/images/dirty.png';
    this.answer = 1;
  }

  loadLevel2(): void {

    this.sentence = '   Păsările sunt ..';
    this.option1 = 'albastre';
    this.option2 = 'vorbărețe';
    this.option3 = 'călătoare';
    this.image1='assets/images/blue.gif';
    this.image2='assets/images/vorbarete.png';
    this.image3='assets/images/vestitorii/barza.png';
    this.answer = 3;
    this.progress = 91;
  }

  loadLevel3(): void {

    this.sentence = '   Copacii sunt ...';
    this.option1 = 'aurii';
    this.option2 = 'înfloriți';
    this.option3 = 'călători';
    this.image1='assets/images/auriu.png';
    this.image2='assets/images/infloriti.png';
    this.image3='assets/images/vestitorii/barza.png';
    this.answer = 2;
    this.progress = 98;
  }

  handleClick(index: number): void {
    switch (index) {
      case this.answer: {
        this.openCorrectDialog();
        if (this.level < 3) {
          this.dialogRef.afterClosed().subscribe( () =>
          {
            this.router.navigate(['/limba', this.level + 1]);
          });
        } else {
          this.progress = 100;
          setTimeout(() => {
            this.router.navigate(['/final']);
          }, 3200);
        }
        break;
      }
      default: {
        this.openWrongDialog();
        if (index === 1) {
          this.wrong1 = true;
        }
        if (index === 2) {
          this.wrong2 = true;
        }
        if (index === 3) {
          this.wrong3 = true;
        }
        break;
      }
    }
  }

  openCorrectDialog(): void {
    this.stopAllSounds();
    this.dialogRef = this.dialog.open(DialogCorectComponent, {
      disableClose: true,
      panelClass: 'dialog-nobg'
    });

    this.dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        this.dialogRef.close();
      }, 3000);
    });
  }

  openWrongDialog(): void {
    this.stopAllSounds();
    this.dialogRef = this.dialog.open(DialogGresealaComponent, {
      disableClose: true,
      panelClass: 'dialog-nobg'
    });

    this.dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        this.dialogRef.close();
      }, 3700);
    });
  }

  resetWrongs(): void {
    this.wrong1 = false;
    this.wrong2 = false;
    this.wrong3 = false;
  }

  playModul(): void {
    this.stopAllSounds();
    this.modul.play();
  }

  playCerinta(): void {
    this.stopAllSounds();
    this.cerinta.play();
  }

  playOption1(): void {
    this.stopAllSounds();
    this.option1audio.play();
  }

  playOption2(): void {
    this.stopAllSounds();
    this.option2audio.play();
  }

  playOption3(): void {
    this.stopAllSounds();
    this.option3audio.play();
  }

  stopAllSounds(): void {
    this.modul.stop();
    this.cerinta.stop();
    this.option1audio.stop();
    this.option2audio.stop();
    this.option3audio.stop();
  }
}
