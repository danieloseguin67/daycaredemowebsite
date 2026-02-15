import { Component, OnInit, OnDestroy, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  content: any = {};
  currentSlide = 0;
  autoPlayInterval: any;
  
  // Placeholder images from Unsplash for daycare/children
  carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&h=600&fit=crop',
      caption: 'Creative Learning Activities'
    },
    {
      url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop',
      caption: 'Outdoor Playtime'
    },
    {
      url: 'https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&h=600&fit=crop',
      caption: 'Story Time'
    },
    {
      url: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?w=800&h=600&fit=crop',
      caption: 'Art & Crafts'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      caption: 'Learning Together'
    },
    {
      url: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=800&h=600&fit=crop',
      caption: 'Fun Activities'
    }
  ];

  constructor(public langService: LanguageService) {
    effect(() => {
      const lang = this.langService.getCurrentLanguage()();
      this.loadContent();
    });
  }

  ngOnInit() {
    this.langService.loadTranslations('gallery').subscribe(() => {
      this.loadContent();
    });
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  private loadContent() {
    const lang = this.langService.getCurrentLanguage()();
    this.content = this.langService.t('');
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 
      ? this.carouselImages.length - 1 
      : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    // Reset auto-play timer when user manually changes slide
    this.stopAutoPlay();
    this.startAutoPlay();
  }
}
