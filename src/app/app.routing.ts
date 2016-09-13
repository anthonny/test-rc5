import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component.ts';
import {SpeakersComponent} from './speakers/speakers.component.ts';

const appRoutes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: EventsComponent},
  {path: 'speakers', component: SpeakersComponent},
  {path: 'speakers/:id', component: SpeakersComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
