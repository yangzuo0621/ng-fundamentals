import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { NotFoundComponent } from './errors/not-found.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved event, do you really want to cancel?');
  }
  return true;
}
