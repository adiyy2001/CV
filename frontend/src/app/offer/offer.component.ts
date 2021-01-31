import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent {
  onload: number = 0;
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private renderer: Renderer2
  ) {}

  action(event: any) {
    console.log(event);
  }

  public onIntersection({
    target,
    visible,
  }: {
    target: Element;
    visible: boolean;
  }): number | void {
    const classlist = this._document.body.classList;
    this.onload++;
    if (this.onload === 1) return 0;
    if (classlist.contains('bodybg-color')) {
      classlist.remove('bodybg-color');
    } else {
      classlist.add('bodybg-color');
    }
  }
}
