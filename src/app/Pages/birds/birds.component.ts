import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent {

  photos = [
    { url: 'path/to/photo1.jpg' },
    { url: 'path/to/photo2.jpg' },
    { url: 'path/to/photo3.jpg' },
    // Add more photo objects here
  ];

  constructor() { }
}


  

