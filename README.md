# Attha's Restaurant Website

A modern, elegant restaurant website built with Next.js 16, Tailwind CSS v4, and Framer Motion. This production-ready website showcases fine dining with a focus on user experience, accessibility, and performance.

## 🌟 Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, Tailwind CSS v4
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **Smooth Animations**: Framer Motion for elegant transitions and interactions
- **SEO Optimized**: Proper metadata, semantic HTML, and Open Graph tags
- **Accessible**: ARIA labels, keyboard navigation, semantic elements
- **Type Safe**: Full TypeScript implementation
- **Performance**: Static page generation, optimized assets

## 🎨 Brand Colors

The website strictly follows the Attha's brand color palette:

- **Primary Black**: `#000000` - Headers, footers, hero overlays
- **Accent Gold**: `#FDCB20` - CTAs, hover states, price highlights
- **Neutral White**: `#FFFFFF` - Text on black, core content sections
- **Warm Gray**: `#F2F2F2` - Alternating section backgrounds
- **Deep Olive**: `#4B5320` - Category labels, luxury accents
- **Rich Maroon**: `#800000` - Special offers, seasonal items

## 📄 Pages

### Home (`/`)
- Hero section with call-to-action
- Featured dishes showcase
- About preview
- Features and benefits
- Reservation call-to-action

### Menu (`/menu`)
- Appetizers, Main Courses, Vegetarian, Desserts
- Special dish highlighting
- Category labels and pricing

### About (`/about`)
- Restaurant history and story
- Philosophy section
- Core values
- Team showcase

### Reservations (`/reservations`)
- Full booking form
- Date and time selection
- Special requests
- Cancellation policy

### Contact (`/contact`)
- Contact form
- Location and hours
- Direct contact information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📁 Project Structure

```
/app
  /about/page.tsx          # About page
  /contact/page.tsx        # Contact page
  /menu/page.tsx           # Menu page
  /reservations/page.tsx   # Reservations page
  layout.tsx               # Root layout
  page.tsx                 # Homepage
  globals.css              # Global styles

/components
  Header.tsx               # Navigation header
  Footer.tsx               # Site footer
  Hero.tsx                 # Hero section
  MenuCard.tsx             # Dish card component
  Section.tsx              # Section wrapper

/public                    # Static assets
```

## 🎨 Typography

- **Serif Font**: Playfair Display - Used for headings and elegant text
- **Sans Font**: Inter - Used for body text and UI elements

## 🧩 Components

### Header
Fixed navigation with mobile-responsive hamburger menu, smooth animations, and call-to-action button.

### Footer
Comprehensive footer with links, contact information, social media, business hours, and copyright.

### Hero
Full-screen hero section with animated text, call-to-action buttons, and scroll indicator.

### MenuCard
Reusable card component for displaying dishes with name, description, price, category, and special badges.

### Section
Flexible section wrapper with configurable background colors and consistent spacing.

## 🛠️ Tech Stack

- **Next.js** 16.0.3 - React framework with App Router
- **React** 19.2.0 - UI library
- **TypeScript** 5.x - Type safety
- **Tailwind CSS** 4.x - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- Color contrast compliance

## 🔒 Security

- No security vulnerabilities detected (CodeQL scanned)
- Input validation on forms
- Safe external links with `rel="noopener noreferrer"`

## 📈 Performance

- Static page generation
- Optimized font loading
- Lazy loading where appropriate
- Minimal JavaScript bundle

## 🚀 Deployment

This project can be deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect GitHub repository
- **Custom Server**: Use `npm run build && npm start`

## 📝 License

This project is proprietary and belongs to Attha's Restaurant.

## 👥 Contact

For questions or support, contact:
- Email: info@atthas.com
- Phone: +1 (234) 567-890

---

Built with ❤️ for Attha's Restaurant
