import { Injectable } from '@angular/core';
import { accommodations } from '../mocks/accommodations.mock'
import {  destinations } from '../mocks/destinations.mock'

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private infoAccomodation: any;

constructor() { }

  getAccommodations(id:number) {
    return  accommodations.filter(a=>{ return a.id === id });
  }

  getDestinations() {
    return destinations;
  }

  setInfoAccommodation(data: any) {
    this.infoAccomodation = data;
  }

  getInfoAccommodation() {
    return this.infoAccomodation;
  }

}
