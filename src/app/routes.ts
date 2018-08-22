import { Routes } from '@angular/router';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent
} from './events/index';

import { NotFoundComponent } from './errors/not-found.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];
