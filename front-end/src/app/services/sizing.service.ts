import { Injectable } from '@angular/core';
import { ISizing } from '../models/sizing';

@Injectable({
  providedIn: 'root'
})
export class SizingService {
  private mockData: ISizing = {
    name: 'Homo sapiens',
    size: 170,
    weight: 62,
    imageUrl: 'https://i.pinimg.com/736x/83/6a/9b/836a9b18adaa21e843116bfde0cba594.jpg',
    wikiUrl: 'https://en.wikipedia.org/wiki/Human',
    description: 'Humans (Homo sapiens) are a species of highly intelligent primates ',
  }

  constructor() { }

  getSizingData(): ISizing {
    return this.mockData;
  }
}
