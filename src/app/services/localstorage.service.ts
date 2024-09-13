import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class LocalStorageService {
    constructor() {}

    get GetMode():string | null {
        let mode = localStorage.getItem('theme');
        return mode;
    }

    get GetLang():string | null {
        let lang = localStorage.getItem('lang');
        return lang;
    }
}