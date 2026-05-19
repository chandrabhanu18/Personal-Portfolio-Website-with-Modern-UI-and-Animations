# Personal Portfolio Website

A modern, fully responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features advanced animations, parallax scrolling effects, and a beautiful dark theme.

## ✨ Features

- **Fully Responsive Design** - Optimized for mobile (375px), tablet (768px), and desktop (1280px) breakpoints
- **Smooth Animations** - Implemented with Framer Motion and AOS (Animate On Scroll)
- **Parallax Scrolling** - Eye-catching parallax effects on hero section backgrounds
- **On-Scroll Animations** - Multiple animations that trigger as sections come into view
- **Performance Optimized** - Optimized images, lazy loading, and efficient code splitting
- **Accessibility** - respects `prefers-reduced-motion` and includes proper semantic HTML
- **Modern UI** - Beautiful dark theme with gradient accents and smooth transitions
- **SEO Ready** - Proper meta tags, Open Graph support, and structured markup

## 🎨 Sections

1. **Navigation** - Sticky responsive navbar with mobile menu
2. **Hero** - Eye-catching intro with parallax background elements
3. **About** - Personal bio and key information
4. **Skills** - Visual skill display with progress bars (3 categories)
5. **Projects** - Showcasing 3+ featured projects with descriptions and tech stacks (replace placeholder data in `src/data/siteData.js` with your real project URLs and images)
6. **Contact** - Contact form and social media links
7. **Footer** - Quick links and copyright information

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.6
- **Build Tool**: Vite 5.4.10
- **CSS Framework**: Tailwind CSS 3.4.17
- **Animation Libraries**:
  - Framer Motion 12.38.0
  - AOS (Animate On Scroll) 2.3.4
  - React Scroll Parallax 3.5.0
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Package Manager**: npm

## 📋 Requirements Met

✅ Fully responsive layout (mobile, tablet, desktop)
✅ 5 required sections (Hero, About, Skills, Projects, Contact)
✅ At least 3 projects with descriptions, tech stacks, and GitHub links
✅ Parallax scrolling effect on hero section
✅ 3+ on-scroll animations (fade-up, flip, zoom effects)
✅ Respects `prefers-reduced-motion` accessibility feature
✅ Production-ready build with optimized assets
✅ Comprehensive README with setup instructions
✅ Clean, modular component architecture
✅ Lighthouse scores optimization ready

## 🚀 Getting Started

### Prerequisites

- Node.js 20.17+ (or compatible version)
- npm 11.1.0+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🎯 Customization

### Update Personal Information

Edit the component files to add your own content:

- **Hero**: Update name and title in `src/components/Hero.jsx`
- **About**: Add your bio and photo in `src/components/About.jsx`
- **Skills**: Modify skill categories and levels in `src/components/Skills.jsx`
- **Projects**: Add your projects in `src/components/Projects.jsx`
- **Contact**: Update contact links in `src/components/Contact.jsx`

### Modify Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',
      secondary: '#1e293b',
      accent: '#3b82f6',
    }
  }
}
```

### Update Animations

Customize animation settings in `src/components/*`:

- Framer Motion: Adjust `transition` and `initial` props
- AOS: Modify `data-aos` attributes and timing

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel automatically detects Vite configuration
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click "Deploy site"

## 📊 Performance

The portfolio is optimized for performance:

- **Lighthouse Scores** (Target):
  - Performance: 80+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 85+

- **Optimizations**:
  - Code splitting with Vite
  - Lazy loading for images
  - CSS minification and purging
  - Tree-shaking of unused dependencies
  - Efficient animation using `transform` and `opacity` only

## ♿ Accessibility

- Proper semantic HTML structure
- Color contrast compliance (WCAG AA)
- Keyboard navigation support
- Screen reader friendly
- `prefers-reduced-motion` support for users who prefer minimal animations
- Focus states for interactive elements

## 📱 Responsive Design

Optimized for all screen sizes:
- **Mobile** (375px): Single column, optimized touch targets
- **Tablet** (768px): Two-column layouts, readable text
- **Desktop** (1280px): Full multi-column layouts

## 🔗 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [AOS Library](https://michalsnik.github.io/aos/)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Mandiga Chandra Bhanu

## 🙏 Acknowledgments

- Inspired by modern portfolio design best practices
- Built with production-quality standards
- Special thanks to the open-source community

---

**Live Demo**: Replace with your deployment URL after publishing
**GitHub Repository**: Replace with your repository URL

For questions or suggestions, feel free to reach out!
