# Mavtar Printing Press - Project Overview

## 📋 Project Description

**Mavtar Printing Press Pvt. Ltd.** is a premium digital and printing services web application built with modern web technologies. The platform serves as a comprehensive marketplace for printing services, allowing customers to:

- Browse and order **wedding cards, visiting cards, and marketing materials**
- **Download digital designs instantly** or request professional prints
- Request **custom quotes** for bulk or specialized printing needs
- Explore the **portfolio** of previous work
- Contact the business for **inquiries and support**

### 🎯 Target Audience
- Individuals planning weddings and events
- Businesses needing marketing materials (brochures, banners, business cards)
- Professionals requiring visiting cards and corporate stationery
- Organizations needing bulk printing services

---

## 🛠️ Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | Next.js | 16.1.1 |
| **UI Library** | React | 19.2.3 |
| **Styling** | Tailwind CSS | v4 |
| **Component Library** | HeroUI (NextUI) | 2.8.7 |
| **Animations** | Motion (Framer Motion) | 12.25.0 |
| **Icons** | Lucide React | 0.562.0 |
| **UI Primitives** | Radix UI | Various |
| **Fonts** | Outfit, Inter | Google Fonts |

---

## 🎨 Brand Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Purple** | `#61358C` | Primary brand color - buttons, accents, highlights |
| **Cyan** | `#11B4D9` | Secondary/accent - icons, highlights |
| **Green** | `#0D8C39` | Success states, eco-friendly messaging |
| **Orange** | `#F27F3D` | Marketing/promotional sections, warnings |
| **Red** | `#F23838` | Wedding/invitation section, destructive actions |

---

## 📁 Folder Structure

```
mavtar-prints/
├── 📁 app/                          # Next.js App Router (Pages)
│   ├── 📁 about/                    # About Us page
│   │   └── page.js
│   ├── 📁 careers/                  # Careers/Jobs page
│   │   └── page.js
│   ├── 📁 category/                 # Product category pages
│   │   └── [slug]/page.js           # Dynamic category routes
│   ├── 📁 contact/                  # Contact Us page
│   │   └── page.js
│   ├── 📁 faq/                      # Frequently Asked Questions
│   │   └── page.js
│   ├── 📁 portfolio/                # Portfolio/Our Work showcase
│   │   └── page.js
│   ├── 📁 privacy/                  # Privacy Policy page
│   │   └── page.js
│   ├── 📁 products/                 # Product detail pages
│   │   └── [slug]/page.js           # Dynamic product routes
│   ├── 📁 quote/                    # Request a Quote page
│   │   └── page.js
│   ├── 📁 search/                   # Search results page
│   │   └── page.js
│   ├── 📁 services/                 # Services listing page
│   │   └── page.js
│   ├── 📁 terms/                    # Terms & Conditions
│   │   └── page.js
│   ├── 📁 testimonials/             # Customer testimonials page
│   │   └── page.js
│   ├── favicon.ico                  # Site favicon
│   ├── globals.css                  # Global CSS with theme variables
│   ├── layout.js                    # Root layout with providers
│   └── page.js                      # Homepage
│
├── 📁 components/                   # Reusable React Components
│   ├── 📁 landing/                  # Homepage section components
│   │   ├── Categories.jsx           # Product categories grid
│   │   ├── FeaturedProducts.jsx     # Featured products carousel
│   │   ├── FinalCTA.jsx             # Final call-to-action section
│   │   ├── Hero.jsx                 # Hero banner section
│   │   ├── HowItWorks.jsx           # How it works steps
│   │   ├── RecentlyPrinted.jsx      # Recently printed items
│   │   ├── RecommendedProducts.jsx  # Recommended products
│   │   ├── ServicesOverview.jsx     # Services overview cards
│   │   ├── Testimonials.jsx         # Customer testimonials
│   │   ├── TrustSection.jsx         # Trust indicators/badges
│   │   └── WhyChooseUs.jsx          # Why choose us section
│   │
│   ├── 📁 layout/                   # Layout components
│   │   ├── Footer.jsx               # Site footer
│   │   └── Header.jsx               # Navigation header
│   │
│   ├── 📁 ui/                       # Base UI components (shadcn/ui)
│   │   ├── ThemeToggle.jsx          # Dark/Light mode toggle
│   │   ├── avatar.jsx               # User avatar component
│   │   ├── badge.jsx                # Badge/tag component
│   │   ├── button.jsx               # Button component
│   │   ├── card.jsx                 # Card container
│   │   ├── dialog.jsx               # Modal dialog
│   │   ├── dropdown-menu.jsx        # Dropdown menu
│   │   ├── input.jsx                # Form input
│   │   ├── label.jsx                # Form label
│   │   ├── scroll-area.jsx          # Scrollable area
│   │   ├── separator.jsx            # Visual separator
│   │   ├── sheet.jsx                # Slide-out panel
│   │   └── tabs.jsx                 # Tab navigation
│   │
│   ├── 📁 cart/                     # Shopping cart components
│   ├── 📁 products/                 # Product-related components
│   └── Providers.jsx                # App-wide providers (Theme, etc.)
│
├── 📁 context/                      # React Context providers
│   └── ThemeContext.jsx             # Theme management context
│
├── 📁 lib/                          # Utility functions
│   └── utils.js                     # Helper utilities (cn, etc.)
│
├── 📁 public/                       # Static assets
│   ├── 📁 products/                 # Product images
│   ├── hero-bg.jpg                  # Hero background image
│   ├── logo.png                     # Company logo
│   └── *.svg                        # Icon assets
│
├── 📄 Configuration Files
│   ├── .gitignore                   # Git ignore rules
│   ├── components.json              # shadcn/ui config
│   ├── eslint.config.mjs            # ESLint configuration
│   ├── jsconfig.json                # JS path aliases
│   ├── next.config.mjs              # Next.js configuration
│   ├── package.json                 # Dependencies & scripts
│   ├── postcss.config.mjs           # PostCSS configuration
│   └── tailwind.config.js           # Tailwind CSS + HeroUI theme
│
└── README.md                        # Project readme
```

---

## 📄 Page Structure

### Main Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, testimonials, and CTAs |
| `/services` | Comprehensive services listing with categories |
| `/about` | Company information, mission, and values |
| `/portfolio` | Showcase of previous work and projects |
| `/contact` | Contact form and business information |
| `/quote` | Request a custom quote form |
| `/faq` | Frequently asked questions with accordion |
| `/careers` | Job opportunities and company culture |

### Dynamic Routes

| Route | Description |
|-------|-------------|
| `/category/[slug]` | Products filtered by category |
| `/products/[slug]` | Individual product detail page |
| `/search` | Search results page |

### Legal Pages

| Route | Description |
|-------|-------------|
| `/privacy` | Privacy policy |
| `/terms` | Terms and conditions |
| `/testimonials` | Extended testimonials page |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd mavtar-prints

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (localhost:3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Theme System

The application uses a comprehensive theming system with:

1. **CSS Custom Properties** in `globals.css` for theme tokens
2. **HeroUI Theme** in `tailwind.config.js` for component styling
3. **Dark/Light Mode** toggle with persistent preference

### Key Theme Files

- `app/globals.css` - CSS variables for colors, shadows, animations
- `tailwind.config.js` - Tailwind & HeroUI theme configuration
- `context/ThemeContext.jsx` - Theme state management
- `components/ui/ThemeToggle.jsx` - Theme switch component

---

## 📦 Key Dependencies

### Core
- **next** - React framework with App Router
- **react** / **react-dom** - UI library

### UI Components
- **@heroui/react** - Pre-built UI components
- **@radix-ui/*** - Accessible UI primitives
- **lucide-react** - Icon library

### Styling
- **tailwindcss** - Utility-first CSS
- **class-variance-authority** - Variant styling
- **tailwind-merge** - Class merging utility
- **clsx** - Conditional classes

### Animation
- **motion** - Animation library (Framer Motion)
- **tailwindcss-animate** - Tailwind animation utilities

---

## 📝 Notes

- The project uses Next.js 16 with the App Router
- SEO metadata is configured in `layout.js`
- The site is optimized for Indian locale (en_IN)
- Custom fonts: **Outfit** (primary) and **Inter** (secondary)
