import { Component } from '@angular/core';

@Component({
  selector: 'app-landscapes',
  templateUrl: './landscapes.component.html',
  styleUrls: ['./landscapes.component.scss']
})
export class LandscapesComponent {
  photos : string[] = [];
  selectedImage: string | null = null;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 44; i++) {
      this.photos.push(`./assets/img/landscape/${i}.jpg`);
    }
  }

  openOverlay(photo: string) {
    this.selectedImage = photo;
  }

  closeOverlay() {
    this.selectedImage = null;
  }
}
