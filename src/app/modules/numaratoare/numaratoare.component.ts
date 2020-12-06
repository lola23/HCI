import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{Howl} from 'howler'

@Component({
  selector: 'app-numaratoare',
  templateUrl: './numaratoare.component.html',
  styleUrls: ['./numaratoare.component.css']
})

export class NumaratoareComponent implements OnInit {

  id1:boolean=false;
  id2:boolean=false;
  id:number=1;
  sound = new Howl({

    src: ['assets/audio/winnieVrea.mp3'],

    volume: 1,

  });
  soundBravo=
  new Howl({

    src: ['assets/audio/bravo.mp3'],

    volume: 1 

  });
  soundIncerca=new Howl({

    src: ['assets/audio/maiIncearca.mp3'],

    volume: 1,

  });
  soundGhiocei=new Howl({

    src: ['assets/audio/catighiocei.mp3'],

    volume: 1,

  });
 

  private sub: any;

  constructor(private route: ActivatedRoute,private readonly router: Router) { }

  ngOnInit(): void {

   this.route.params.subscribe(params => {
      this.id= +params['id'];
   });
   
   if(this.id===1){
    this.id1=true;
    this.sound.play();
   }
   else if(this.id===2){
     this.id2=true;
     this.soundGhiocei.play();
  
   }

    

    document.getElementById('wrong').hidden = true;
    document.getElementById('wrong2').hidden = true;
    document.getElementById('bravo').hidden = true;
     
    document.getElementById('wrong1gh').hidden = true;
    document.getElementById('wrong3gh').hidden = true;
    document.getElementById('bravo2gh').hidden = true;
    document.getElementById('sad').hidden = true;
    document.getElementById('happy').hidden = true;

  }

  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = "";
  //   audio.load();
  //   audio.play();
  // }

  ghiocei(nr){
    if(nr===1){
      document.getElementById('winnied').hidden = true;
document.getElementById('happy').hidden = false;
document.getElementById('sad').hidden=true;
document.getElementById('wrong1gh').hidden = false;
      document.getElementById('wrong3gh').hidden = true;
      document.getElementById('bravo2gh').hidden = true;
      this.soundIncerca.play();
      this.soundBravo.stop();
    }
    else if(nr===2){

      document.getElementById('winnied').hidden = true;
      document.getElementById('sad').hidden = false;
      document.getElementById('happy').hidden = true;
      document.getElementById('wrong1gh').hidden = true;
      document.getElementById('wrong3gh').hidden = true;
      document.getElementById('bravo2gh').hidden = false;
      this.soundIncerca.stop();
      this.soundBravo.play();
      
    }
    else if(nr===3){

      document.getElementById('winnied').hidden = true;
      document.getElementById('happy').hidden = false;
      document.getElementById('sad').hidden=true;
      document.getElementById('wrong1gh').hidden = true;
document.getElementById('wrong3gh').hidden = false;
document.getElementById('bravo2gh').hidden = true;
this.soundBravo.stop();
this.soundIncerca.play();
  }


}

  jar(a){

    if(a===1 ){

document.getElementById('winnied').hidden = true;
document.getElementById('happy').hidden = false;
document.getElementById('sad').hidden=true;
document.getElementById('wrong').hidden = false;
      document.getElementById('wrong2').hidden = true;
      document.getElementById('bravo').hidden = true;
      this.soundBravo.stop();
      this.soundIncerca.play();
    }
    else if(a===2){

      document.getElementById('winnied').hidden = true;
      document.getElementById('happy').hidden = false;
      document.getElementById('sad').hidden=true;
      document.getElementById('wrong').hidden = true;
document.getElementById('wrong2').hidden = false;
document.getElementById('bravo').hidden = true;
this.soundBravo.stop();
this.soundIncerca.play();
      
    }
    else if(a===3){

      document.getElementById('winnied').hidden = true;
      document.getElementById('sad').hidden = false;
      document.getElementById('happy').hidden = true;
      document.getElementById('wrong').hidden = true;
      document.getElementById('wrong2').hidden = true;
      document.getElementById('bravo').hidden = false;
      this.soundIncerca.stop();
      this.soundBravo.play();
      setTimeout(() => 
{
  this.router.navigate(['/forme',1]);

},
5000);
      
      
     }

  }

  over(){
    if(this.id1){

    this.sound.play();
    }else if(this.id2){
      this.soundGhiocei.play();
    }
  }

  out(){
if(this.id1){
    this.sound.stop();
}
else if(this.id2){
  this.soundGhiocei.stop();
}
  }

}
