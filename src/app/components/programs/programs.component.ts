import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  content: any = {};

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
    this.content = this.langService.t('programs');
  }
}
