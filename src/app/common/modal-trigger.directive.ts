import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[modal-trigger]'
})
export class ModelTriggerDirective implements OnInit {
  @Input('modal-trigger') modalId: string;

  private el: HTMLElement;

  constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
    this.el = ref.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
