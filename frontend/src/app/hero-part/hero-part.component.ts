import { Component, OnInit } from '@angular/core';
import { TranslationsService } from 'src/shared/translations.service';

@Component({
  selector: 'app-hero-part',
  templateUrl: './hero-part.component.html',
  styleUrls: ['./hero-part.component.scss']
})
export class HeroPartComponent implements OnInit{
  list = ['Development', 'managment', 'cloud solutions', 'User Interfaces'];

  constructor( private translationService: TranslationsService ) {}

  ngOnInit() {
    this.translationService.getTranslations().subscribe(_ => console.log( _ ))
  }
}
