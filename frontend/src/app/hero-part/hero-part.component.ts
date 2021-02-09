import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-hero-part',
  templateUrl: './hero-part.component.html',
  styleUrls: ['./hero-part.component.scss'],
})
export class HeroPartComponent implements OnInit {
  constructor(private translate: TranslateService) {}
  
  private readonly translationKeys = ['websites', 'development', 'managment', 'cloud_solutions', 'user_interfaces'];
  list: string[]  = [];

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.list = this.translationKeys.map((text) => this.translate.instant(text));
    });
  }

  moveToSection(section: string): void {
    const yOffset = -100; 
    const element = document.querySelector(section);
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }

}
