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
    const bodyClasslist = this._document.body.classList;
    const typeWriterClasslist = this._document.querySelector('.hero-text')?.classList;
    this.onload++;
    if (this.onload === 1) return 0;
    if (bodyClasslist.contains('bodybg-color')) {
      bodyClasslist.remove('bodybg-color');
      typeWriterClasslist?.remove('white-text');
    } else {
      bodyClasslist.add('bodybg-color');
      typeWriterClasslist?.add('white-text')
      this._document.body.style.backgroundColor = "#092545";
    }
  }
}
