import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OfferComponent } from './offer/offer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'frontend';
  
  constructor( private translateService: TranslateService, translate: TranslateService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ) {
    translate.addLangs(['en', 'klingon'])
    translate.setDefaultLang('en');
    translate.use('en');
    
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.translateService.setDefaultLang('en');
  }

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
