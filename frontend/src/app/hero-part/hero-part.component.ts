import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-hero-part',
  templateUrl: './hero-part.component.html',
  styleUrls: ['./hero-part.component.scss']
})
export class HeroPartComponent implements OnInit, OnChanges{
  constructor(private translate: TranslateService) {}
  list = ['development', 'managment', 'cloud_solutions', 'user_interfaces'];
  ngOnInit(): void {
    
  }
  // translatation() {
  //   fromEvent(this.translate.currentLang, 'ch')
  // }

  ngOnChanges( simpleChanges: SimpleChanges ) {
    
  }
}
