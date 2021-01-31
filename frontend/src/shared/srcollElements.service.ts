import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class scrollElements {
    private subject = new Subject<any>();

    setValueForEnd(message: boolean) {
        this.subject.next({ text: message });
    }


    getValueForEnd(): Observable<any> {
        return this.subject.asObservable();
    }
}