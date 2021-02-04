import { Component } from '@angular/core';

@Component({
    selector: 'app-skills-section',
    templateUrl: './skills-section.component.html',
    styleUrls: ['./skills-section.component.scss']
})

export class SkillsSectionComponent {
    moveToSection(section: string) {
        const yOffset = -100; 
        const element = document.querySelector(section);
        const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
        window.scrollTo({top: y, behavior: 'smooth'});
      }
}
