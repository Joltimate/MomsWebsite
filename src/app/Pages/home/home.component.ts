import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  imageObject = [{
    image: 'assets/img/nina.jpg',
    thumbImage: 'assets/img/nina.jpg',
  },
  {
    image: 'assets/img/nina2.jpg',
    thumbImage: 'assets/img/nina2.jpg',
  },
  {
    image: 'assets/img/sra1.jpg',
    thumbImage: 'assets/img/sra1.jpg',
  },{
    image: 'assets/img/sra2.jpg',
    thumbImage: 'assets/img/sra2.jpg',
  },{
    image: 'assets/img/nina3.jpg',
    thumbImage: 'assets/img/nina3.jpg',
  },{
    image: 'assets/img/sra3.jpg',
    thumbImage: 'assets/img/sra3.jpg',
  },{
    image: 'assets/img/sra4.jpg',
    thumbImage: 'assets/img/sra4.jpg',
  },{
    image: 'assets/img/sra5.jpg',
    thumbImage: 'assets/img/sra5.jpg',
  },{
    image: 'assets/img/nina4.jpg',
    thumbImage: 'assets/img/nin4.jpg',
  },{
    image: 'assets/img/nina5.jpg',
    thumbImage: 'assets/img/nina5.jpg',
  },



];
}

