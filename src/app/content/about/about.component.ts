import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { }
  lines;
  show = false;
  ngOnInit(): void {
    this.lines = document.getElementsByClassName('line')
    // console.log(this.lines[0].childNodes.length);
  }
  
  async animate(e:any){
    console.log(e)
    if(e.visible){
      let j = 25;
      for(let i = 0; i < this.lines.length; i++){
        for (let n = 0; n < this.lines[i].childNodes.length; n++){
          this.lines[i].childNodes[n].style.animation = `animateCode 50ms ease-in-out ${j*75}ms 1 forwards`
          j++;
        }
      }
      await this.move(j*75);
      this.show = true;
    }    
  }

  move (duration:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, duration);
    });
  }
}
