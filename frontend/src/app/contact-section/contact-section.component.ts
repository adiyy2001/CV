import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { scrollElements } from 'src/shared/srcollElements.service';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  contactForm: FormGroup;
  reachedTheEnd: any;
  constructor(private http: HttpClient, private scrollElementsService: scrollElements) {
    this.scrollElementsService.getValueForEnd().subscribe(val => {
      this.reachedTheEnd = val.text
      console.log(val)
    })

    this.contactForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      title: new FormControl(''),
      message: new FormControl(''),
    });
  }

  public hasError(controlName: string, errorName: string): boolean {
    return this.contactForm.controls[controlName].hasError(errorName);
  }

  sendEmail(data: any): void {
    const { message, title, email } = data.value;
    const formData = new FormData();
    formData.append('body', message);
    formData.append('subject', title);
    formData.append('from', email);

    this.http
      .post('https://flashly.azurewebsites.net/api/SendEmail', formData)
      .subscribe((_) => {
        console.log(_);
        this.contactForm.reset();
      });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
