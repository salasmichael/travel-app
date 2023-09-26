import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private destinations = [
    {
      id: 1,
      name:"Barranquilla"
    },
    {
      id: 2,
      name:"San Andres"
    },
    {
      id: 3,
      name:"Bogotá"
    },
    {
      id: 4,
      name:"Cartagena"
    },
    {
      id: 5,
      name:"Cali"
    },
    {
      id: 6,
      name:"Santa Marta"
    }
  ];

  private accommodations = [
    {
      id:1,
      img: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/d7/47/0c7c80e64280b6e2c5eaad5545b0043377ec430d3907704f39cc56c4bbc5.jpeg',
      title: 'Hotel Dann Carlton Barranquilla',
      description: "Este hotel sencillo con vista al mar Caribe se ubica a 6 km del Teatro Amira de la Rosa (donde se realizan conciertos) y a 5 km de las exhibiciones de arte del Museo Romántico.",
      price: "258328"
    },
    {
      id:2,
      img: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/5b/38/477953e05fcc168865e2b1a61a43242043fbca629ef3379b2f701e7895a9.jpeg',
      title: 'San Luis Place By Dorado',
      description: 'Este hotel dispone de espacios para fumadores.Te sentirás como en tu propia casa en cualquiera de las 20 habitaciones con aire acondicionado, minibar y televisión LCD. En tus ratos libres tendrás un televisor con canales por cable para entretenerte. El cuarto de baño está provisto de ducha.',
      price: "259999"
    },
    {
      id:3,
      img: 'https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_225,q_auto,w_225/hotelier-images/18/5a/82f4ffffbe066ad19f6fbe418660d717cfc3d246913d7d8f1c9c3562fa1f.jpeg',
      title: 'Hotel Embassy Park',
      description: 'l Hotel Embassy Park es un hotel clásico con instalaciones modernas situado en Bogotá, cerca del centro Corferias y a unos 15 minutos en coche del aeropuerto El Dorado. El establecimiento ofrece un spa y un gimnasio bien equipado.',
      price: "262428"
    },
  ];

  constructor() { }

  getAccommodations(id:number) {
    return  this.accommodations.filter(a=>{ return a.id === id });
  }

  getDestinations() {
    return this.destinations;
  }

}
