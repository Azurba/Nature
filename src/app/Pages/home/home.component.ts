import { Component } from '@angular/core';
import { homeCard } from 'src/app/Model/homeCard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cards : homeCard[] = [
    {
      title: "Birds",
      picture: "./assets/img/birds/110.jpg",
      router: "/birds" 
    },
    {
      title: "Flowers",
      picture: "./assets/img/flowers/54.jpg",
      router: "/flowers" 
    },
    {
      title: "Animals",
      picture: "./assets/img/animals/18.JPG",
      router: "/animals" 
    },
    {
      title: "Landscapes",
      picture: "./assets/img/landscape/11.jpg",
      router: "/landscape" 
    }

  ];

  constructor() {

  }
}
