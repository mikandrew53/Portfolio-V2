
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import Glide, { 
  Controls,
   Swipe,
   Keyboard,
   Breakpoints} from '@glidejs/glide/dist/glide.modular.esm'


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   event.target.innerWidth;
  //   this.width = event.target.innerWidth;
  //   // this.calcCardViews();
    
  // }
  show = false;
  width:number = window.innerWidth;
  items: Array<number> = [];
  projects = [];
  glide;
  cardViews:number;
  @ViewChild('glide', {static: true}) gliderEl:ElementRef;

  @ViewChild('projectsContainer', {static: true}) projetcsConatiner: ElementRef;

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 5; i++){
      this.items.push(i);
    }
  this.projects = [
      {
        title: 'Sorting Algorithm Visualizer',
        description: 'This is a web application that visualizes popular sorting algorithms. I implemented merge sort, quick sort, and bubble sort.',
        img: './../../../assets/sorting.svg',
        github: 'https://github.com/mikandrew53/Sorting-Visualizer',
        link: 'https://xenodochial-kare-dde6be.netlify.app/',
        target: '_blank',
        category: 'project-category',
        live: true
      },
      {
        title: 'Spacetagram',
        description: 'The purpose of this web app is to utilize the NASA API to pull images (and its metadata), and allow the user to “like” and “unlike” their favourite images.',
        img: './../../../assets/rocket.png',
        github: 'https://github.com/mikandrew53/Spacestagram',
        link: 'https://spacetagram-a514f.firebaseapp.com',
        target: '_blank',
        category: 'project-category',
        live: true
      },
      {
        title: 'The Shoppies: Movie Awards',
        description: 'This project was a challenge that was put forth by Shopify. It’s objective is to provide a platform for employees to nominate 5 movies for The Shoppies: Movie Awards, as well as provide sharable links that the employees can use to share their nominations.',
        img: './../../../assets/Stellaris-Clapper-board.svg',
        link: 'https://shoppies-5b855.firebaseapp.com/',
        github: 'https://github.com/mikandrew53/Movie-Awards',
        target: '_blank',
        category: 'project-category',
        live: true
      },

      {
        title: 'Weather App',
        description: 'Web application to display current and past weather for various cities using the ‘metaweather’ api. The app is optimized o make the minimum amount of http requests in order to decrease traffic on the API.',
        img: './../../../assets/weather.svg',
        github: 'https://github.com/mikandrew53/Weather-App',
        link: 'https://nervous-lamarr-1e19ac.netlify.app/',
        target: '_blank',
        category: 'project-category',
        live: true
      },
      {
        title: 'Online Shopping Form Validator',
        description: 'The checkout for an online store. The store has a dynamically updating shopping cart and form validation for checkout.',
        img: './../../../assets/shopping.svg',
        github: 'https://github.com/mikandrew53/Online-Shoping-Store',
        link: 'https://silly-cori-c0bbc8.netlify.app/',
        target: '_blank',
        category: 'project-category',
        live: true
      },
      {
        title: 'Netflix Clone... Under Construction',
        description: 'Web application that clones Netflix. Currenltly being built using Angular. The Movie Database API will be used to fetch the movies and their images. Firebase authentication is being leveraged for authentication. ',
        img: './../../../assets/netflix.svg',
        link: 'https://netflix-clone-9fb80.web.app/',
        github: 'https://github.com/mikandrew53/Netflix-Clone',
        target: '_blank',
        category: 'project-category',
        live: true
      },

      {
        title: 'Spotify Music Web App',
        description: 'Web application will be built using the Spotify api and angular. The user will be able to login to their Spotify account, or search and listen to music without an account.',
        img: './../../../assets/music.svg',
        link: '#',
        target: '_blank',
        category: 'project-category',
        live: false
      },
    ]
    this.projects[0].next = this.projects[1];
    this.projects[this.projects.length-1].previous = this.projects[this.projects.length-2];
    for (let i = 1; i < this.projects.length -1; i++){
      this.projects[i].next = this.projects[i+1];
      this.projects[i].previous = this.projects[i-1];
    }

    // this.calcCardViews();
  
  }


  ngAfterViewInit(): void {
   this.glide = new Glide(this.gliderEl.nativeElement, {
      perView: 3,
      gap: 10,
      bound: true,
      rewind: true,
      breakpoints: {
        peek: {
          before: 100, 
          after: 100 ,
        },
        700: {
          perView: 1,
          peek: {
            before: 0, 
            after: 5 ,
          },

        },
        1000: {
          perView: 2,
          peek: {
            before: 50, 
            after: 50 ,
          },
        }
      }
      // keyboard: true
    })

    this.mountGlider();
  }

  onView(e:any){
    if(e.visible && !this.show)
      this.show = true;
  }
  
  async mountGlider(){
    await this.move(200);
    this.glide.mount( {
      Controls, 
      Swipe,
      Keyboard,
      Breakpoints
    })

  }

  move (duration:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, duration);
    });
  } 

  onClick(direction:string){
    direction === 'R' ? this.glide.go('>') : this.glide.go('<')
  }

  onProjectClick(live:boolean, e:Event) {
    if(!live) 
      e.preventDefault();
  }
}