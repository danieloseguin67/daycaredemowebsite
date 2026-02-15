import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content: any = {};
  showModal = false;
  formSubmitted = false;
  
  visitForm = {
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    childAge: '',
    message: ''
  };

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
    this.content = {
      hero: this.langService.t('hero'),
      about: this.langService.t('about')
    };
  }

  openModal() {
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.formSubmitted = false;
    document.body.style.overflow = 'auto';
  }

  submitForm() {
    // In a real application, you would send this data to a backend
    console.log('Visit scheduled:', this.visitForm);
    this.formSubmitted = true;
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.resetForm();
      this.closeModal();
    }, 3000);
  }

  resetForm() {
    this.visitForm = {
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      childAge: '',
      message: ''
    };
  }
}
