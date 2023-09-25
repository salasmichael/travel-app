import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private accommodations = [
    {
      id:1,
      img: 'ruta_de_la_imagen_1.jpg',
      title: 'Alojamiento 1',
      description: 'Descripción del alojamiento 1.',
      price: 100
    },
    {
      id:2,
      img: 'ruta_de_la_imagen_2.jpg',
      title: 'Alojamiento 2',
      description: 'Descripción del alojamiento 2.',
      price: 150
    },
    {
      id:3,
      img: 'ruta_de_la_imagen_3.jpg',
      title: 'Alojamiento 3',
      description: 'Descripción del alojamiento 3.',
      price: 80
    },
  ];

  constructor() { }

  getAccommodations(id:number) {
    return this.accommodations;
  }

}
