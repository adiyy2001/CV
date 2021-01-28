import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export const baseUrl = 'https://flashly.azurewebsites.net/api/';
export class TranslationHttpLoader implements TranslateLoader {
  constructor(private httpClient: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    if (lang == null) {
      lang == 'en';
    }

    const urls: any = {
      pl: `${baseUrl}translation/PL`,
      en: `${baseUrl}translation/EN`,
    };

    let observer = new Observable((observer) => {
      this.httpClient.get(urls[lang]).subscribe(
        (data) => {
          observer.next(data);
          observer.complete();
        },
        (error) => {
          console.log(error);
        }
      );
    });

    return observer
  }
}
