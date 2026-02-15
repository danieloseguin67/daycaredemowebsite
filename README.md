# Little Stars Daycare Website

A modern, fully responsive, bilingual (English/French) Angular 19 website for a daycare center. Features include an auto-playing image carousel, interactive scheduling form, and comprehensive information about childcare programs.

## 🌟 Features

### Core Functionality
- **Bilingual Support**: Seamless toggle between English and French using dropdown selector with language preference persistence in localStorage
- **Fully Responsive Design**: Optimized for all devices (desktop, laptop, tablet, mobile)
  - Desktop: 1200px+
  - Laptop: 1024px - 1200px
  - Tablet: 768px - 1024px
  - Mobile: 480px - 768px
  - Small Mobile: < 480px
- **Modern UI/UX**: Clean, professional interface with gradient accents and smooth animations
- **Auto-Playing Carousel**: 3-second interval image rotation with manual controls
- **Interactive Modal Forms**: Schedule a visit with validation and success feedback
- **Component-Based Architecture**: Modular Angular standalone components for easy maintenance
- **JSON Data Management**: All content stored in JSON files for easy updates without code changes
- **Lazy Loading**: Optimized performance with lazy-loaded routes

### Design Features
- Sticky navigation header that stays visible while scrolling
- Mobile-friendly hamburger menu
- Smooth transitions and hover effects
- Gradient color scheme (Purple to Blue)
- Professional typography with Inter font family
- Shadow effects and rounded corners for modern look

## 📄 Pages

1. **Home** 
   - Hero section with promotional image and call-to-action
   - About section with mission statement
   - Feature cards highlighting key services
   - Schedule a visit modal form

2. **Programs**
   - Infant Care (6 weeks - 18 months)
   - Toddler Program (18 months - 3 years)
   - Preschool (3 - 5 years)
   - Detailed features for each program

3. **Gallery**
   - Auto-playing carousel with 6 placeholder images
   - Manual navigation controls (previous/next arrows)
   - Click-to-select indicators
   - Responsive image display

4. **Contact**
   - Contact information cards (address, phone, email, hours)
   - Contact form with validation
   - Responsive two-column layout

## 🚀 Technology Stack

- **Framework**: Angular 19 (Standalone Components)
- **Language**: TypeScript 5.6+
- **Styling**: SCSS with responsive breakpoints
- **Forms**: Angular FormsModule (Template-driven)
- **Routing**: Angular Router with lazy loading
- **HTTP Client**: For loading JSON data
- **State Management**: Angular Signals
- **Build Tool**: Angular CLI with esbuild

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── header/          # Sticky navigation with language dropdown
│   │   ├── footer/          # Footer with social links
│   │   ├── home/            # Home page with modal form
│   │   ├── programs/        # Programs information page
│   │   ├── gallery/         # Gallery with auto-playing carousel
│   │   └── contact/         # Contact form and info
│   ├── services/
│   │   └── language.service.ts  # Bilingual content management
│   ├── app.component.*      # Root component
│   ├── app.config.ts        # App configuration with providers
│   └── app.routes.ts        # Lazy-loaded route definitions
├── assets/
│   ├── data/
│   │   ├── site-content.json    # Main content (EN/FR)
│   │   └── gallery.json         # Gallery images data
│   └── images/
│       └── promo.jpeg           # Hero section image
├── styles.scss              # Global styles and responsive utilities
└── index.html              # Main HTML file

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd daycare
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Or:
   ```bash
   ng serve
   ```

4. **Open in browser**
   Navigate to `http://localhost:4200/`

### Build for Production

```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory.

## 📱 Responsive Breakpoints

The website uses the following responsive breakpoints:

- **Large Desktop**: > 1200px
- **Laptop**: 1024px - 1200px
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Small Mobile**: < 480px

## 🎨 Color Scheme

- **Primary Gradient**: `#667eea` (Blue) to `#764ba2` (Purple)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#333` (Dark Gray)
- **Accent**: White with gradient overlays

## 🌐 Bilingual Content

All text content is managed through JSON files in `src/assets/data/`:
- `site-content.json`: Main website content (navigation, hero, about, programs, contact, footer)
- `gallery.json`: Gallery image data and captions

### Supported Languages
- English (en)
- French (fr)

Language selection is persisted in browser localStorage.

## 🖼️ Image Carousel

The gallery features an auto-playing carousel with:
- 6 placeholder images from Unsplash
- 3-second auto-play interval
- Manual navigation (previous/next buttons)
- Indicator dots for slide selection
- Smooth transitions
- Touch-friendly controls on mobile

## 📝 Schedule Visit Form

The modal form includes:
- Name (required)
- Email (required)
- Phone (required)
- Child's Age (optional)
- Preferred Date (date picker)
- Preferred Time (dropdown with time slots)
- Additional Information (textarea)
- Form validation
- Success message with animation
- Auto-close after submission

## 🎯 Key Components

### LanguageService
Manages bilingual content with:
- Current language state (Signal)
- Translation data loading
- Language switching with persistence
- Fallback content support

### Header Component
- Responsive navigation menu
- Language dropdown selector
- Mobile hamburger menu
- Sticky positioning
- Active route highlighting

### Gallery Component
- Auto-playing carousel with 3s intervals
- Lifecycle management (OnDestroy for cleanup)
- Manual slide navigation
- Responsive image sizing

### Home Component
- Modal form management
- Form validation and submission
- Success state handling
- Body scroll locking when modal open

## 🔧 Configuration Files

- `angular.json`: Angular CLI configuration with asset management
- `tsconfig.json`: TypeScript compiler options
- `package.json`: Dependencies and scripts
- `.gitignore`: Files excluded from version control

## 📦 Dependencies

Key dependencies:
- `@angular/core`: ^19.0.0
- `@angular/common`: ^19.0.0
- `@angular/router`: ^19.0.0
- `@angular/forms`: ^19.0.0
- `rxjs`: ^7.8.0
- `zone.js`: ^0.15.0

## 🚦 Available Scripts

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm test`: Run unit tests
- `npm run watch`: Build and watch for changes
- `ng serve --open`: Start server and open browser

## 🐛 Troubleshooting

### White page on load
- Ensure dev server is running on port 4200
- Check that assets are properly configured in `angular.json`
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Navigation menu not showing
- Verify translations are loading from JSON files
- Check fallback text is in place for menu items
- Inspect browser console for errors

### Carousel not auto-playing
- Ensure component properly implements OnDestroy
- Check that interval is cleared on component destroy
- Verify images are loading from Unsplash

## 📄 License

This project is created for educational and demonstration purposes.

## 👥 Contributing

This is a sample daycare website. Feel free to use it as a template for your own projects.

## 📞 Support

For questions or support, please contact the development team.

---

Built with ❤️ using Angular 19
│   └── images/
│       └── promo.jpeg           # Promo image
└── styles.scss              # Global styles
```

## Content Management

All content is stored in JSON files located in `src/assets/data/`:

- **site-content.json**: Contains all text content for the website in both English and French
- **gallery.json**: Contains gallery image information

### Updating Content

To update the website content:

1. Open the relevant JSON file in `src/assets/data/`
2. Modify the text for either `"en"` (English) or `"fr"` (French)
3. Save the file - changes will be reflected immediately in development mode

## Development

### Prerequisites

- Node.js (v22 or higher)
- npm (v10 or higher)
- Angular CLI (v19)

### Installation

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Production Build

```bash
ng build --configuration production
```

## Color Scheme

The website uses a modern purple gradient color scheme:

- **Primary**: `#667eea` (Blue-Purple)
- **Secondary**: `#764ba2` (Purple)
- **Background**: `#f8f9fa` (Light Gray)
- **Text**: `#333333` (Dark Gray)

## Language Switching

The language switcher in the header allows users to toggle between English and French. The selected language is stored in localStorage and persists across sessions.

## Adding Images

To add more images to the gallery:

1. Place the image in `src/assets/images/`
2. Add an entry to `src/assets/data/gallery.json` in both `"en"` and `"fr"` sections:

```json
{
  "id": 2,
  "url": "assets/images/your-image.jpg",
  "caption": "Your caption",
  "category": "facility"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2026 Little Stars Daycare. All rights reserved.

## Support

For questions or support, contact: info@littlestarsdaycare.com


```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
