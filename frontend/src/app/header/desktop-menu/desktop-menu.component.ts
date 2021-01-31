import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
})
export class DesktopMenuComponent {
  constructor(private translateService: TranslateService) {}

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
