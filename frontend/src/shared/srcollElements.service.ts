import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class scrollElements {
    elements!: { offer: HTMLElement; };

    constructor() {}
}