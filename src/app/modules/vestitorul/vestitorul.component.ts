import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogGresealaComponent} from '../../shared/dialog-greseala/dialog-greseala.component';
import {DialogCorectComponent} from '../../shared/dialog-corect/dialog-corect.component';
import {Howl} from 'howler';

@Component({
  selector: 'app-vestitorul',
  templateUrl: './vestitorul.component.html',
  styleUrls: ['./vestitorul.component.css']
})
export class VestitorulComponent implements OnInit {

  modul = new Howl({
    src: ['assets/audio/descopera_vestitorii.mp3'],
    volume: 1,
  });

  cerinta = new Howl({
    src: ['assets/audio/cerinta_vestitor.mp3'],
    volume: 1,
  });

  initial = true;
  level;
  image1;
  image2;
  image3;
  answer;
  progress;
  wrong1 = false;
  wrong2 = false;
  wrong3 = false;
  dialogRef;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    public readonly dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.level = parseInt(params.id, 10);
      this.resetWrongs();
      switch (this.level) {
        case 1: {
          this.loadLevel1();
          this.modul.play();
          this.modul.on('end', () => {
            this.cerinta.play();
            this.cerinta.on('end', () => this.initial = false);
          });
          break;
        }
        case 2: {
          this.loadLevel2();
          this.cerinta.play();
          break;
        }
        case 3: {
          this.loadLevel3();
          this.cerinta.play();
          break;
        }
      }
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

  loadLevel1(): void {
    this.image1 = 'assets/images/vestitorii/barza.png';
    this.image2 = 'assets/images/vestitorii/caine.png';
    this.image3 = 'assets/images/vestitorii/frunze.png';
    this.answer = 1;
    this.progress = 0;
  }

  loadLevel2(): void {
    this.image1 = 'assets/images/vestitorii/avion.png';
    this.image2 = 'assets/images/vestitorii/caine.png';
    this.image3 = 'assets/images/vestitorii/soare.png';
    this.answer = 3;
    this.progress = 6;
  }

  loadLevel3(): void {
    this.image1 = 'assets/images/vestitorii/frunze.png';
    this.image2 = 'assets/images/vestitorii/ghiocel.png';
    this.image3 = 'assets/images/vestitorii/avion.png';
    this.answer = 2;
    this.progress = 12;
  }

  resetWrongs(): void {
    this.wrong1 = false;
    this.wrong2 = false;
    this.wrong3 = false;
  }

  handleClick(index: number): void {
    switch (index) {
      case this.answer: {
        this.openCorrectDialog();
        this.dialogRef.afterClosed().subscribe(() => {
          if (this.level < 3) {
            this.router.navigate(['/vestitorul', this.level + 1]);
          } else {
            this.router.navigate(['/numaratore', 1]);
          }
        });
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

  stopAllSounds(): void {
    this.modul.stop();
    this.cerinta.stop();
  }

  playModul(): void {
    if (!this.initial) {
      this.stopAllSounds();
      this.modul.play();
    }
  }

  playCerinta(): void {
    if (!this.initial) {
      this.stopAllSounds();
      this.cerinta.play();
    }
  }
}
