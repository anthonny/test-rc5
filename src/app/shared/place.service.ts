import { Injectable } from '@angular/core';
import { Place } from './place.model';
import * as _ from 'lodash';

@Injectable()
export class PlaceService {

  places: Place[];
  constructor() {
    this.places = _.cloneDeep(njPlaces);
    this.places.forEach(place => {
      place.image = `assets/images/places/map-${place.id}.png`;
    })
   }

  getPlace(idPlace): Place {
    return _.find(this.places, place => place.id === idPlace);
  }

}
