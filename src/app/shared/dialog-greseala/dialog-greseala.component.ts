import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Howl} from 'howler';

@Component({
  selector: 'app-dialog-greseala',
  templateUrl: './dialog-greseala.component.html',
  styleUrls: ['./dialog-greseala.component.css']
})
export class DialogGresealaComponent implements OnInit {

  soundIncearca = new Howl({

    src: ['assets/audio/maiIncearca.mp3'],
    volume: 1,

  });

  constructor(
    public dialogRef: MatDialogRef<DialogGresealaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.soundIncearca.play();
  }
}
