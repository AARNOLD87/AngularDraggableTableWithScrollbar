import { Directive, OnInit, ElementRef } from '@angular/core';
import * as autoScroll from 'dom-autoscroller';

@Directive({ selector: '[appAutoScroll]' })
export class AutoScrollDirective implements OnInit {
  constructor(private elemRef: ElementRef) { }

  ngOnInit(): void {
    autoScroll([this.elemRef.nativeElement], {
      margin: 30,
      maxSpeed: 10,
      scrollWhenOutside: true,
      autoScroll() {
        return this.down;
      }
    });
  }
}
