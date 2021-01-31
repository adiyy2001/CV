import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OfferComponent } from './offer/offer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'frontend';
  
  constructor( private translateService: TranslateService, translate: TranslateService ) {
    translate.addLangs(['en', 'klingon'])
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit() {
    this.translateService.setDefaultLang('en');
  }
}
