import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export type Language = 'en' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage = signal<Language>('en');
  private translations = signal<any>({});

  constructor(private http: HttpClient) {
    // Load saved language preference or default to English
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'fr')) {
      this.currentLanguage.set(savedLang);
    }
  }

  getCurrentLanguage() {
    return this.currentLanguage.asReadonly();
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    localStorage.setItem('language', lang);
  }

  loadTranslations(file: string): Observable<any> {
    return this.http.get(`assets/data/${file}.json`).pipe(
      tap((data: any) => {
        this.translations.set(data);
      })
    );
  }

  getTranslation(key: string): any {
    const translations = this.translations();
    const lang = this.currentLanguage();
    
    if (!translations[lang]) {
      return '';
    }

    const keys = key.split('.');
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return '';
      }
    }
    
    return value || '';
  }

  t(key: string): any {
    return this.getTranslation(key);
  }
}
