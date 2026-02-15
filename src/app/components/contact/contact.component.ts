import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  content: any = {};
  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  submitted = false;

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
    this.content = this.langService.t('contact');
  }

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      this.submitted = true;
      setTimeout(() => {
        this.formData = { name: '', email: '', phone: '', message: '' };
        this.submitted = false;
      }, 3000);
    }
  }
}
