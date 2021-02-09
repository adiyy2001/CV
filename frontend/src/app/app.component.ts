import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OfferComponent } from './offer/offer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  mobileQuery: MediaQueryList;
  
  constructor( 
    private translate: TranslateService, 
            changeDetectorRef: ChangeDetectorRef, 
            media: MediaMatcher 
    ) {
    this.translate.setDefaultLang('pl');
    this.translate.use('pl');
    
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  moveToSection(section: string) {
    const yOffset = -100; 
    const element = document.querySelector(section);
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
  
  private _mobileQueryListener: () => void;
}
