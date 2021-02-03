import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  private _mobileQueryListener: () => void;

  moveToSection(section: string) {
    const yOffset = -100; 
    const element = document.querySelector(section);
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
