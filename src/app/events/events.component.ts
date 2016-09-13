import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Event } from './shared/event.model';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, OnDestroy {

  selectedId: string;
  selectedEvent: any;
  events: any[];
  sub: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.sub = this.route
      .params
      .subscribe(params => {
        if (!params['id']) {
          this.router.navigate(['/events', this.events[0].id]);
          return;
        }

        this.selectedEvent = this.eventService.getEvent(params['id']);
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
