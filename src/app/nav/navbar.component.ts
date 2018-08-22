import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'event-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public auth: AuthService) { }
}
