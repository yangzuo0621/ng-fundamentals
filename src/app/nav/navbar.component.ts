import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'event-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) { }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      }
    );
  }
}
