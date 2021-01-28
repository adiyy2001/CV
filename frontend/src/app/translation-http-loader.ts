import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

// APP_INITILAZATION improvment
@Injectable()
export class TranslationHttpLoader implements TranslateLoader {
  constructor(private httpClient: HttpClient) {}

  getTranslation(lang: string): Observable<any> {
    if (lang == null) {
      lang == 'en';
    }

    const urls: any = {
      pl: `${environment.baseURL}translation/PL`,
      en: `${environment.baseURL}translation/EN`,
    };

    const observer = new Observable((observer) => {
      this.httpClient.get(urls[lang]).subscribe(
        (data: any) => {
          console.log(data.value);
          observer.next(data.value[0]);
          observer.complete();
        },
        (error) => {
          console.log(error);
        }
      );
    });

    return observer;
  }
}
