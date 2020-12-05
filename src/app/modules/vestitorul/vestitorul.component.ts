import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-vestitorul',
  templateUrl: './vestitorul.component.html',
  styleUrls: ['./vestitorul.component.css']
})
export class VestitorulComponent implements OnInit {

  level;
  image1;
  image2;
  image3;
  answer;
  progress;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.level = parseInt(params.id, 10);
      switch (this.level) {
        case 1:
        {
          this.loadLevel1();
          break;
        }
        case 2:
        {
          this.loadLevel2();
          break;
        }
        case 3:
        {
          this.loadLevel3();
          break;
        }
      }
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

  handleClick(index: number): void {
    switch (index) {
      case this.answer:
      {
        // add happy winnie
        if (this.level < 3) {
          this.router.navigate(['/vestitorul', this.level + 1]);
        } else {
          this.router.navigate(['/numaratore',1]);
        }
        break;
      }
      default:
      {
        // add sad winnie
        // put red border and make not clickable
        break;
      }
    }
  }
}
