import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent {

  photos : string[] = [];
  selectedImage: string | null = null;

  constructor() { }

  ngOnInit() {
    for (let i = 1; i < 100; i++) {
      this.photos.push(`./assets/img/birds/${i}.jpg`);
    }
  }

  openOverlay(photo: string) {
    this.selectedImage = photo;
  }

  closeOverlay() {
    this.selectedImage = null;
  }
}

