import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-collapsible-well',
  templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent {
  visible = true;

  toggleContent() {
    this.visible = !this.visible;
  }
}
