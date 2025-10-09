# Life and Limb - Website Recreation

A pixel-accurate recreation of the Life and Limb nonprofit organization website built with Next.js, Material UI v6, and Tailwind CSS.

## 🌟 Features

- **Modern Stack**: Built with Next.js 15.5.4, React 19, Material UI v6, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with perfect responsiveness across all devices
- **SEO Optimized**: Complete meta tags, semantic HTML, and optimized structure
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Performance**: Optimized images, code splitting, and fast loading times

## 🛠️ Technologies Used

- **Framework**: Next.js 15.5.4 (App Router)
- **UI Library**: Material UI v6
- **Styling**: Tailwind CSS + Custom CSS
- **Animations**: Framer Motion
- **Typography**: Inter & Poppins fonts
- **Language**: JavaScript (ES2022+)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about-us/          # About page
│   ├── contact-us/        # Contact page
│   ├── gallery/           # Gallery page
│   ├── news-and-articles/ # News & Articles page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Homepage
├── components/            # Reusable components
│   ├── Footer.js          # Footer component
│   └── Navbar.js          # Navigation component
└── lib/                   # Utilities and configurations
    ├── MUIThemeProvider.js # MUI theme provider
    └── theme.js           # Custom MUI theme

public/
├── images/               # Image assets
│   ├── placeholders/     # Placeholder images
│   └── logo.svg          # Site logo
└── favicon.ico           # Favicon
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd lifeandlimbs
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with mission statement
- Testimonial section
- Action cards (Donate, Volunteer, Share)
- Features section (Why We're Different)
- Mission section with image
- FAQ accordion
- News & Articles preview

### About Us (`/about-us`)
- Organization story and mission
- Timeline of milestones
- Team member profiles
- Impact statistics
- Call to action

### Services (`/services`)
- Complete service offerings
- Step-by-step process
- Eligibility requirements
- Technology partnerships

### Contact Us (`/contact-us`)
- Contact information cards
- Contact form with validation
- Office location and hours
- FAQ section

### News & Articles (`/news-and-articles`)
- Article grid with categories
- Newsletter signup
- Article previews

### Gallery (`/gallery`)
- Image gallery grid
- Category filtering
- Lightbox functionality

## 🎨 Design Features

- **Color Scheme**: Professional blue palette with yellow accents
- **Typography**: Inter for body text, Poppins for headings
- **Layout**: Clean, modern design with generous whitespace
- **Animations**: Subtle fade-in and slide-up animations
- **Cards**: Elevated cards with hover effects
- **Buttons**: Rounded buttons with proper states

## 🔧 Customization

### Updating Content
- Page content is in individual page components
- Update text, images, and links as needed
- Replace placeholder images in `/public/images/placeholders/`

### Styling
- Global styles in `src/app/globals.css`
- MUI theme in `src/lib/theme.js`
- Tailwind config in `tailwind.config.js`

### Adding New Pages
1. Create new directory in `src/app/`
2. Add `page.js` file with page component
3. Update navigation in `src/components/Navbar.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px
- **Large Desktop**: > 1280px

## 🌐 SEO Features

- Dynamic meta tags for each page
- OpenGraph and Twitter Card support
- Semantic HTML structure
- Sitemap and robots.txt ready
- JSON-LD structured data ready

## 🎯 Performance Optimizations

- Next.js automatic code splitting
- Image optimization with Next.js Image component
- CSS optimization with Tailwind purging
- Font optimization with Google Fonts
- Lazy loading for animations

## 📋 Todo / Future Enhancements

- [ ] Replace placeholder images with real photos
- [ ] Implement blog/article system with CMS
- [ ] Add contact form backend integration
- [ ] Implement newsletter signup functionality
- [ ] Add search functionality
- [ ] Multi-language support
- [ ] Add donation integration
- [ ] Implement user authentication for applications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email: founder@lifeandlimbs.org
Phone: 0479-2998836

## 📄 License

This project is created for Life and Limb nonprofit organization. All rights reserved.

## 🙏 Acknowledgments

- Original Life and Limb website for design inspiration
- Material UI team for excellent component library
- Tailwind CSS for utility-first CSS framework
- Next.js team for the amazing React framework
- Framer Motion for smooth animations

---

Built with ❤️ for Life and Limb nonprofit organization
