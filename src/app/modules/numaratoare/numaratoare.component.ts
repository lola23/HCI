import {Component, NgZone, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Howl} from 'howler';

@Component({
  selector: 'app-numaratoare',
  templateUrl: './numaratoare.component.html',
  styleUrls: ['./numaratoare.component.css']
})

export class NumaratoareComponent implements OnInit {

  level;
  obiect;
  obiectCat;
  path;
  id1 = false;
  id2 = false;
  id = 1;
  sound = new Howl({

    src: ['assets/audio/winnieVrea.mp3'],

    volume: 1,

  });
  soundBravo =
    new Howl({

      src: ['assets/audio/bravo.mp3'],

      volume: 1

    });
  soundIncerca = new Howl({

    src: ['assets/audio/maiIncearca.mp3'],

    volume: 1,

  });
  soundGhiocei = new Howl({

    src: ['assets/audio/catighiocei.mp3'],

    volume: 1,

  });


  private sub: any;

  constructor(   private readonly route: ActivatedRoute,
    private readonly router: Router,private ngZone:NgZone,) {
    
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
    
      this.level = parseInt(params.id, 10);
     
      // this.resetWrongs();
      switch (this.level) {
        case 1: {
          this.loadLevel1();
          this.sound.play();
          
          break;
        }
        case 2: {
          this.loadLevel2();
          this.soundGhiocei.play();
          
         
          break;
        }
        case 3: {
          this.loadLevel3();
         
          break;
        }
      }
    });

    // if (this.id === 1) {
    //   this.id1 = true;
    //   this.sound.play();
    // } else if (this.id === 2) {
    //   this.id2 = true;
    //   this.soundGhiocei.play();

    // }


    document.getElementById('wrong').hidden = true;
    document.getElementById('wrong2').hidden = true;
    document.getElementById('bravo').hidden = true;

    document.getElementById('wrong1gh').hidden = true;
    document.getElementById('wrong3gh').hidden = true;
    document.getElementById('bravo2gh').hidden = true;
    document.getElementById('sad').hidden = true;
    document.getElementById('happy').hidden = true;

  }
  loadLevel3() {
    document.getElementById('winnied').hidden = false;
    document.getElementById('l1h1').hidden = true;
          document.getElementById('l1h2').hidden = true;
          document.getElementById('jar1').hidden = true;
          document.getElementById('jar2').hidden = true;
          document.getElementById('jar3').hidden = true;
          document.getElementById('wrong').hidden = true;
          document.getElementById('wrong2').hidden = true;
          document.getElementById('bravo').hidden = true;
      
          document.getElementById('wrong1gh').hidden = true;
          document.getElementById('wrong3gh').hidden = true;
          document.getElementById('bravo2gh').hidden = true;
          document.getElementById('sad').hidden = true;
          document.getElementById('happy').hidden = true;
    document.getElementById('ajuta').hidden = false;
          document.getElementById('apasa').hidden = false;
          document.getElementById('cati').hidden = false;
          document.getElementById('ghioceidiv').hidden = false;
          document.getElementById('number1div').hidden = false;
          document.getElementById('number2div').hidden = false;
          document.getElementById('number3div').hidden = false;
    this.path="assets/images/berze1.jpg";
    this.obiect="sa gaseasca toate berzele";
    this.obiectCat="Cate berze";
  }
  loadLevel2() {
    document.getElementById('winnied').hidden = false;
    document.getElementById('l1h1').hidden = true;
          document.getElementById('l1h2').hidden = true;
          document.getElementById('jar1').hidden = true;
          document.getElementById('jar2').hidden = true;
          document.getElementById('jar3').hidden = true;
          document.getElementById('wrong').hidden = true;
          document.getElementById('wrong2').hidden = true;
          document.getElementById('bravo').hidden = true;
      
          document.getElementById('wrong1gh').hidden = true;
          document.getElementById('wrong3gh').hidden = true;
          document.getElementById('bravo2gh').hidden = true;
          document.getElementById('sad').hidden = true;
          document.getElementById('happy').hidden = true;
    document.getElementById('ajuta').hidden = false;
          document.getElementById('apasa').hidden = false;
          document.getElementById('cati').hidden = false;
          document.getElementById('ghioceidiv').hidden = false;
          document.getElementById('number1div').hidden = false;
          document.getElementById('number2div').hidden = false;
          document.getElementById('number3div').hidden = false;
    this.path="assets/images/ghiocei.jpg";
    this.obiect="sa isi gaseasca ghioceii";
    this.obiectCat="Cati ghiocei";
  }
  loadLevel1() {
    document.getElementById('ajuta').hidden = true;
          document.getElementById('apasa').hidden = true;
          document.getElementById('cati').hidden = true;
          document.getElementById('ghioceidiv').hidden = true;
          document.getElementById('number1div').hidden = true;
          document.getElementById('number2div').hidden = true;
          document.getElementById('number3div').hidden = true;
  }

  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = "";
  //   audio.load();
  //   audio.play();
  // }

  ghiocei(nr): void {
    
    if (nr === 1) {
      document.getElementById('winnied').hidden = true;
      document.getElementById('happy').hidden = false;
      document.getElementById('sad').hidden = true;
      document.getElementById('wrong1gh').hidden = false;
      document.getElementById('wrong3gh').hidden = true;
      document.getElementById('bravo2gh').hidden = true;
      this.stopAllSounds();
      this.soundIncerca.play();
      
    } else if (nr === 2) {

      document.getElementById('winnied').hidden = true;
      document.getElementById('sad').hidden = false;
      document.getElementById('happy').hidden = true;
      document.getElementById('wrong1gh').hidden = true;
      document.getElementById('wrong3gh').hidden = true;
      document.getElementById('bravo2gh').hidden = false;
      this.stopAllSounds();
      this.soundBravo.play();
      setTimeout(() =>
      {
        if (this.level < 3) {
          //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
          //     return false;
          // }
          // this.router.onSameUrlNavigation = 'reload';
          this.level=this.level+1;
          this.ngZone.run(()=>this.router.navigate(['/numaratore', 3]));
          
          
            
            
          } else {
             this.router.navigate(['/forme',1]);
          }
      },
      4000);

    } else if (nr === 3) {

      document.getElementById('winnied').hidden = true;
      document.getElementById('happy').hidden = false;
      document.getElementById('sad').hidden = true;
      document.getElementById('wrong1gh').hidden = true;
      document.getElementById('wrong3gh').hidden = false;
      document.getElementById('bravo2gh').hidden = true;
      this.stopAllSounds();
      this.soundIncerca.play();
    }
  


  }
  stopAllSounds(){
    this.sound.stop();
    this.soundBravo.stop();
  this.soundGhiocei.stop();
  this.soundIncerca.stop();
  }

  jar(a): void {

    if (a === 1) {

      document.getElementById('winnied').hidden = true;
      document.getElementById('happy').hidden = false;
      document.getElementById('sad').hidden = true;
      document.getElementById('wrong').hidden = false;
      document.getElementById('wrong2').hidden = true;
      document.getElementById('bravo').hidden = true;
      this.stopAllSounds();
      this.soundIncerca.play();
    } else if (a === 2) {

      document.getElementById('winnied').hidden = true;
      document.getElementById('happy').hidden = false;
      document.getElementById('sad').hidden = true;
      document.getElementById('wrong').hidden = true;
      document.getElementById('wrong2').hidden = false;
      document.getElementById('bravo').hidden = true;
      this.stopAllSounds();
      this.soundIncerca.play();

    } else if (a === 3) {

      document.getElementById('winnied').hidden = true;
      document.getElementById('sad').hidden = false;
      document.getElementById('happy').hidden = true;
      document.getElementById('wrong').hidden = true;
      document.getElementById('wrong2').hidden = true;
      document.getElementById('bravo').hidden = false;
      this.stopAllSounds();
      this.soundBravo.play();

      
 
      setTimeout(() =>
      {
        if (this.level < 3) {
          //   this.router.routeReuseStrategy.shouldReuseRoute = function () {
          //     return false;
          // }
          // this.router.onSameUrlNavigation = 'reload';
          this.level=this.level+1;
          this.ngZone.run(()=>this.router.navigate(['/numaratore', 2]));
          
            // this.level=this.level+1;
            // this.ngOnInit();
            
          } else {
             this.router.navigate(['/forme',1]);
          }
      },
      3700);

 


    }


  }

  over(): void {
    if (this.level===1) {

      this.sound.play();
    } else if (this.level===2) {
      this.soundGhiocei.play();
    }
  }

  out(): void {
    if (this.level===1) {
      this.sound.stop();
    } else if (this.level===2) {
      this.soundGhiocei.stop();
    }
  }

}
