import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-hero-part',
  templateUrl: './hero-part.component.html',
  styleUrls: ['./hero-part.component.scss'],
})
export class HeroPartComponent implements OnInit, OnChanges {
  constructor(private translate: TranslateService) {}
  translationKeys = ['development', 'managment', 'cloud_solutions', 'user_interfaces'];
  list: string[]  = [];
  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.list = this.translationKeys.map((text) => this.translate.instant(text));
      console.log(this.list)
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {}
}
