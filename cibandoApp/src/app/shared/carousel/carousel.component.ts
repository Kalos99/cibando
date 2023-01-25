import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  percorso = "../../../assets/images/carousel-";
  images = [
    {
      id: 1,
      titolo: 'Spaghetti al pomodoro'
    },
    {
      id: 2,
      titolo: 'Tagliata di Manzo'
    },
    {
      id: 3,
      titolo: 'Tiramisù classico'
    }
  ];

}
