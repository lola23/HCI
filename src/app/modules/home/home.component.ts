import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  startVideo(): void {
    // add delay for "Acum hai sa ne jucam" audio
    this.router.navigate(['video']);
  }
}
