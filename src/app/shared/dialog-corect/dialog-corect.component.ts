import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Howl} from 'howler';

@Component({
  selector: 'app-dialog-corect',
  templateUrl: './dialog-corect.component.html',
  styleUrls: ['./dialog-corect.component.css']
})
export class DialogCorectComponent implements OnInit {


  soundBravo = new Howl({

    src: ['assets/audio/bravo.mp3'],
    volume: 1

  });

  constructor(
    public dialogRef: MatDialogRef<DialogCorectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.soundBravo.play();
  }

}
