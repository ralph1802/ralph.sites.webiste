import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})

export class TranslateService {
    lang:string;
    
    constructor() { 
        this.lang =  localStorage.getItem('lang') || 'es';    
        const lang = localStorage.getItem('lang');

        if(!lang) {
            localStorage.setItem('lang','es');
        }
    }

    get GetLang(): string { return localStorage.getItem('lang') === 'es' ? 'es' : 'en' }
      

    changeLang() {
        const currentLang = localStorage.getItem('lang');
        let lang = currentLang === 'es' ? 'en' : 'es';
    
        localStorage.setItem('lang', lang);
        this.lang = lang;
    }


    toggleLang(lang: string) {
        if (lang === 'es' || lang === 'en') {
          localStorage.setItem('lang', lang);
        }
    }
    
}