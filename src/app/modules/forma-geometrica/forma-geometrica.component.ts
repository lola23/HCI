import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-forma-geometrica',
  templateUrl: './forma-geometrica.component.html',
  styleUrls: ['./forma-geometrica.component.css']
})
export class FormaGeometricaComponent implements OnInit {

  path;
  forma = 'triunghi';
  level = 1;
  progress = 42;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.level = parseInt(params.id, 10);
      switch (this.level) {
        case 1: {
          this.loadLevel1();
          break;
        }
        case 2: {
          this.loadLevel2();
          break;
        }
        case 3: {
          this.loadLevel3();
          break;
        }
      }
    });
  }


  loadLevel1(): void {
    this.level = 1;
    this.path = 'assets/images/forme/how_to_draw_trianglee.gif';
    this.forma = 'triunghi';

    this.setImagesForLevel1();
    (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/winnie_waiting.png';
    document.getElementById('how_to').hidden = true;
  }

  loadLevel2(): void {
    this.level = 2;
    this.path = 'assets/images/forme/how_to_draw_circlee.gif';
    this.forma = 'cerc';

    this.setImagesForLevel2();
    (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/winnie_waiting.png';
    document.getElementById('how_to').hidden = true;
    this.progress = 49;
  }

  loadLevel3(): void {
    this.level = 3;
    this.path = 'assets/images/forme/how_to_draw_square.gif';
    this.forma = 'patrat';
    this.setImagesForLevel3();
    (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/winnie_waiting.png';
    document.getElementById('how_to').hidden = true;
    this.progress = 56;
  }

  over(): void {
  }

  out(): void {
  }

  setImagesForLevel1(): void {
    (document.getElementById('choice1') as HTMLImageElement).src = 'assets/images/forme/circle_1.png';
    (document.getElementById('choice2') as HTMLImageElement).src = 'assets/images/forme/square_1.png';
    (document.getElementById('choice3') as HTMLImageElement).src = 'assets/images/forme/triangle_1.png';
  }

  setImagesForLevel2(): void {
    (document.getElementById('choice1') as HTMLImageElement).src = 'assets/images/forme/circle_2.png';
    (document.getElementById('choice2') as HTMLImageElement).src = 'assets/images/forme/square_2.png';
    (document.getElementById('choice3') as HTMLImageElement).src = 'assets/images/forme/triangle_2.png';
  }

  setImagesForLevel3(): void {
    (document.getElementById('choice1') as HTMLImageElement).src = 'assets/images/forme/circle_1.png';
    (document.getElementById('choice2') as HTMLImageElement).src = 'assets/images/forme/square_2.png';
    (document.getElementById('choice3') as HTMLImageElement).src = 'assets/images/forme/triangle_1.png';
  }

  check(a): void {
    if (this.level === 1) {
      if (a !== 3) {
        document.getElementById('how_to').hidden = false;
        setTimeout(() => {
          (document.getElementById('how_to_img') as HTMLImageElement).src = this.path;
          document.getElementById('how_to').hidden = true;
        }, 7000);
      } else {
        (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/well_done.gif';
        setTimeout(() => {
          (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/winnie_waiting.png';
          this.loadLevel2();
        }, 2200);

      }
    } else {
      if (this.level === 2) {
        if (a !== 1) {
          document.getElementById('how_to').hidden = false;
          setTimeout(() => {
            (document.getElementById('how_to_img') as HTMLImageElement).src = this.path;
            document.getElementById('how_to').hidden = true;
          }, 1500);
        } else {
          (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/well_done.gif';
          setTimeout(() => {
            (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/winnie_waiting.png';
            this.loadLevel3();
          }, 2200);

        }
      } else {
        if (this.level === 3) {
          if (a !== 2) {
            document.getElementById('how_to').hidden = false;
            setTimeout(() => {
              (document.getElementById('how_to_img') as HTMLImageElement).src = this.path;
              document.getElementById('how_to').hidden = true;
            }, 2300);
          } else {
            (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/well_done.gif';
            setTimeout(() => {
              (document.getElementById('winnie') as HTMLImageElement).src = 'assets/images/forme/winnie_waiting.png';
              this.router.navigate(['/mediu', 1]);

            }, 2200);
          }
        }
      }
    }
  }

}
