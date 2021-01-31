import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DecimalPipe } from '@angular/common';
import { scrollElements } from 'src/shared/srcollElements.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
})
export class DesktopMenuComponent  implements OnInit{

  reachedTheEnd: boolean = false;
  constructor(private translateService: TranslateService, private decimalPipe: DecimalPipe, private scrollElementsService: scrollElements) {}
  ngOnInit() {
    gsap.to(".menu",{
      scrub: 0.3,
      scrollTrigger: {
        onUpdate: (options) => {
          if (options instanceof ScrollTrigger) {
            const value = Number(this.decimalPipe.transform(options.progress, '1.2-2'));
            this.reachedTheEnd = value > .99;
            this.scrollElementsService.setValueForEnd(this.reachedTheEnd)
          }
        }
      }
    })
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
  }

  moveToSection(section: string) {
    const yOffset = -100; 
    const element = document.querySelector(section);
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }
}
