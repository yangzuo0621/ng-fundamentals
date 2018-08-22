import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastrService } from '../../common/toastr.service';
import { IEvent } from '../shared/index';

@Component({
  selector: 'event-list',
  templateUrl: 'events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private toastrService: ToastrService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
