import { Component } from "@angular/core";
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.scss']
})

export class ContactSectionComponent {
   contactForm: FormGroup;
   
    constructor( private http: HttpClient ) {
        this.contactForm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.email,
              ]),
            title: new FormControl(''),
            message: new FormControl('')
        })
    }

    public hasError (controlName: string, errorName: string) {
        return this.contactForm.controls[controlName].hasError(errorName);
      }

    sendEmail(data: any) {
        this.http.post( 'https://flashly.azurewebsites.net/api/SendEmail', {
            from: data.value.email,
            subject: data.value.title,
            body: data.value.message
        } ).subscribe( _ => {
            console.log( _ )
            this.contactForm.reset();
        } )
    }
    
}