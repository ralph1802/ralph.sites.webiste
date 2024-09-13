import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'translate',
    standalone:true
})

export class TranslatePipe implements PipeTransform {
  
  transform(translateKey: string | undefined, lang: string): string {

    if (!translateKey) {
      // Return a default value or handle the error gracefully
      return '';
    }

    const currentLang = lang || localStorage.getItem('lang') || 'es';

    try {
      const translations = require(`../../../assets/lang/${currentLang}.json`);

      const keys = translateKey.split('.');

      let translation = translations;
      for (const key of keys) {
          if (translation.hasOwnProperty(key)) {
              translation = translation[key];
          } else {
              translation = translateKey;
              break;
          }
      }

      return translation;

      } catch (error) {
        console.error('Error loading translations:', error);
        // Return the key itself if translation fails
        return translateKey;
      }
    }
}