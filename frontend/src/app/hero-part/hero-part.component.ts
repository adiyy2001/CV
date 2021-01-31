import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-part',
  templateUrl: './hero-part.component.html',
  styleUrls: ['./hero-part.component.scss']
})
export class HeroPartComponent implements OnInit {
  constructor() {}
  list = ['development', 'managment', 'cloud_solutions', 'user_interfaces'];
  ngOnInit(): void {
    
  }
  moveToSection(section: string) {
    const yOffset = -100; 
    const element = document.querySelector(section);
    const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
  }

}
