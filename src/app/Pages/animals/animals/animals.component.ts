import { Component } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {
  photos : string[] = [];
  selectedImage: string | null = null;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 33; i++) {
      this.photos.push(`./assets/img/animals/${i}.JPG`);
    }
  }

  openOverlay(photo: string) {
    this.selectedImage = photo;
  }

  closeOverlay() {
    this.selectedImage = null;
  }
}
