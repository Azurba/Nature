import { Component } from '@angular/core';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent {
  photos : string[] = [];
  selectedImage: string | null = null;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 65; i++) {
      this.photos.push(`./assets/img/flowers/${i}.jpg`);
    }
  }

  openOverlay(photo: string) {
    this.selectedImage = photo;
  }

  closeOverlay() {
    this.selectedImage = null;
  }
}
