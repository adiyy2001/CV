import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss']
})
export class DesktopMenuComponent implements OnInit {

  constructor( private translateService: TranslateService ) { }

  ngOnInit(): void {
  }
    changeLanguage(lang: string) {
      this.translateService.use(lang);
    }

}
