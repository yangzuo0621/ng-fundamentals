import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'event-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any;

  constructor(private toastrService: ToastrService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
