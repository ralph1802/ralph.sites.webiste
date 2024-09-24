import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper'; // Importa Swiper directamente
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'popular-designs',
  templateUrl: './popular-designs.component.html',
  styleUrls: ['./popular-designs.component.css']
})
export class PopularDesignsComponent implements AfterViewInit {
  images = [
    '/assets/images/image-popular-01.svg',
    '/assets/images/image-popular-02.svg',
    '/assets/images/image-popular-03.svg',
    '/assets/images/image-popular-04.svg',
    '/assets/images/image-popular-05.svg',
    '/assets/images/image-popular-06.svg',
    '/assets/images/image-popular-07.svg',
    '/assets/images/image-popular-08.svg',
    '/assets/images/image-popular-09.svg',
    '/assets/images/image-popular-10.svg',
  ];

  swiper!: Swiper;

  ngAfterViewInit() {
    this.initSwiper();
  }

  initSwiper() {
    this.swiper = new Swiper('.slider-wrapper', {
      loop: true,
      spaceBetween: 25,
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
}
