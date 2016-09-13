import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';

import { routing } from './app.routing';
import { SpeakersComponent } from './speakers/speakers.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SpeakerListComponent } from './speakers/speaker-list/speaker-list.component';
import { SpeakerDetailComponent } from './speakers/speaker-detail/speaker-detail.component';

import { EventService } from './events/shared/event.service';
import { SpeakerService } from './speakers/shared/speaker.service';
import { EventPipe } from './events/event-list/event.pipe';
import { SpeakerPipe } from './speakers/speaker-list/speaker.pipe';
import { PlaceService } from './shared/place.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    SpeakersComponent,
    EventDetailComponent,
    EventListComponent,
    PageContainerComponent,
    NavigationComponent,
    SpeakerListComponent,
    SpeakerDetailComponent,
    EventPipe,
    SpeakerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [
    EventService,
    SpeakerService,
    PlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
