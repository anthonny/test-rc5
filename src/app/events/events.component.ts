import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

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
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.events = njEvents;
    this.sub = this.route
      .params
      .subscribe(params => {
        if (!params['id']) {
          this.router.navigate(['/events', this.events[0].id]);
          return;
        }
        this.selectedId = params['id'];
        const _selectedEvents = njEvents.filter(event => {
          return event.id === this.selectedId;
        });
        this.selectedEvent = _selectedEvents.length && _selectedEvents[0]
      })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
