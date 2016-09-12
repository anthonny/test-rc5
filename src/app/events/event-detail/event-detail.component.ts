import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() selectedEvent: any;
  selectedPlace: any;
  constructor() { }

  ngOnInit() {
    const _selectedPlaces = njPlaces.filter(place => {
      return place.id === this.selectedEvent.place;
    });

    this.selectedPlace = _selectedPlaces.length && _selectedPlaces[0];
    this.selectedPlace.image = 'http://www.nantesjug.org/images/places/map-epitech.png'

  }
}
