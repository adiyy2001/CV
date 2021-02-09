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
    const descriptionClassList = this._document.querySelector('.hero-description')?.classList;
    this.onload++;

    if (this.onload === 1) { return 0 };
    
    if (bodyClasslist.contains('bodybg-color')) {
      this.renderer.removeClass(this._document.body, 'bodybg-color');
      typeWriterClasslist?.remove('white-text');
      descriptionClassList?.remove('white-text');

    } else {
      this.renderer.addClass(this._document.body, 'bodybg-color');
      typeWriterClasslist?.add('white-text');
      descriptionClassList?.add('white-text');

    }
  }
}
