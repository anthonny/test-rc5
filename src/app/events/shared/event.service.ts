import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { SpeakerService } from '../../speakers/shared/speaker.service';
import { Event } from './event.model';
import { PlaceService } from '../../shared/place.service';

@Injectable()
export class EventService {

  events: Event[];

  constructor(private speakerService: SpeakerService, private placeService: PlaceService) {
    this.events = <Event[]> _.cloneDeep(njEvents);
    this.events.forEach(event => {
      event.fullPlace = this.placeService.getPlace(event.place);
      event.agenda = this.getGoogleCalUrl(event);
    });
     
  }

  convertToGcalDate(date: Date): string {
      return date.toISOString().replace(/[:-]/g, '').replace(/\.000Z/g, 'Z');
  }

  getGoogleCalUrl(event: Event): string {
    const from= _.cloneDeep(event.date);
    from.setHours(parseInt(event.time, 10));

    const to=_.cloneDeep(event.date);
    to.setHours(parseInt(event.time, 10) + 2);

    const title = encodeURI(event.title);

    const date = this.convertToGcalDate(from)+'/'+this.convertToGcalDate(to);
    const location =event.place ? encodeURI(event.fullPlace.name + ' ' + event.fullPlace.address + ' ' + event.fullPlace.city) : '';

    return `http://www.google.com/calendar/event?action=TEMPLATE&text=${title}&dates=${date}&details=&location=${location}`;
  }

  getEvents(): Event[] {
    return this.events;
  }

  getEvent(id: string) {
    const _event = this.events.filter(event => {
      return event.id === id;
    })

    if (!_event.length)
      return new Event();

    const event = _.cloneDeep(_event[0]);
    
    event.subjects.forEach(subject => {
      subject.fullSpeakers = this.speakerService.getSpeakersFromIds(subject.speakers);
    })

    return event; 
  }

}
