import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
   })
export class TranslationsService {

    constructor( private http: HttpClient ) {}
    getTranslations() {
        return this.http.get('https://flashly.azurewebsites.net/api/translation/EN');
    }
}