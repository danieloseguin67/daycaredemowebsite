import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  content: any = {};
  siteName: string = '';
  isMenuOpen = false;

  constructor(public langService: LanguageService) {
    effect(() => {
      const lang = this.langService.getCurrentLanguage()();
      this.loadContent();
    });
  }

  ngOnInit() {
    this.langService.loadTranslations('site-content').subscribe(() => {
      this.loadContent();
    });
  }

  private loadContent() {
    this.content = this.langService.t('nav');
    this.siteName = this.langService.t('siteName');
  }

  onLanguageChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const newLang = select.value as Language;
    this.langService.setLanguage(newLang);
  }

  toggleLanguage() {
    const currentLang = this.langService.getCurrentLanguage()();
    const newLang: Language = currentLang === 'en' ? 'fr' : 'en';
    this.langService.setLanguage(newLang);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  getCurrentLanguage() {
    return this.langService.getCurrentLanguage()();
  }
}
