# HOCX Component Library Documentation

**Framework:** React 18 + TypeScript  
**Styling:** Tailwind CSS v4.0  
**Animation:** Framer Motion

---

## Table of Contents

1. [Component Architecture](#component-architecture)
2. [Core Components](#core-components)
3. [Layout Components](#layout-components)
4. [UI Components](#ui-components)
5. [Usage Examples](#usage-examples)

---

## Component Architecture

### File Structure

```
/components
├── Header.tsx          → Sticky navigation header
├── Hero.tsx            → Hero section with CTA
├── Services.tsx        → Services grid section
├── VideoSection.tsx    → Video showcase section
├── About.tsx           → About/features section
├── Pricing.tsx         → Pricing plans section
├── Contact.tsx         → Contact form section
├── Footer.tsx          → Site footer
└── /ui                 → Reusable UI primitives
    ├── button.tsx
    ├── input.tsx
    ├── card.tsx
    └── ... (shadcn/ui components)
```

### Component Principles

- **Single Responsibility**: Each component handles one section/feature
- **Responsive by Default**: Mobile-first with Tailwind breakpoints
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Animated**: Framer Motion for scroll & interaction animations
- **Type-Safe**: Full TypeScript support

---

## Core Components

### 1. Header Component

**File:** `/components/Header.tsx`

#### Features
- Sticky positioning with backdrop blur
- Responsive mobile menu with slide-in animation
- Smooth scroll navigation
- Gradient brand logo
- CTA button

#### Props
None (self-contained)

#### Usage

```tsx
import { Header } from './components/Header';

<Header />
```

#### Key Classes

```jsx
// Header container
className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100"

// Brand logo
className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"

// Desktop nav button
className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all capitalize font-medium"

// Mobile menu
className="md:hidden overflow-hidden" // + AnimatePresence wrapper
```

#### Animation Patterns

```jsx
// Logo entrance
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}

// Nav buttons
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Mobile menu slide
initial={{ opacity: 0, height: 0 }}
animate={{ opacity: 1, height: 'auto' }}
exit={{ opacity: 0, height: 0 }}
```

---

### 2. Hero Component

**File:** `/components/Hero.tsx`

#### Features
- Large hero text (70-90px responsive)
- Animated gradient background with blob shapes
- Floating geometric elements
- Dual CTA buttons
- Animated stats grid
- Scroll indicator

#### Props
None (self-contained)

#### Usage

```tsx
import { Hero } from './components/Hero';

<Hero />
```

#### Key Elements

```jsx
// Animated background blobs
<div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>

// Hero heading
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">

// Gradient text with underline
<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
  For Your Business
</span>
<motion.div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full" />

// Primary CTA
<button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:shadow-2xl transition-all shadow-lg">

// Stats card
<div className="bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
```

#### Custom Animations

```jsx
// Floating elements
animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}

// Underline reveal
initial={{ width: 0 }}
animate={{ width: "100%" }}
transition={{ duration: 1, delay: 0.8 }}

// Scroll indicator bounce
animate={{ y: [0, 8, 0] }}
transition={{ duration: 2, repeat: Infinity }}
```

---

### 3. Services Component

**File:** `/components/Services.tsx`

#### Features
- 7 service cards in responsive grid
- Color-coded icons with gradients
- Hover effects with gradient overlays
- Lucide React icons
- Scroll-triggered animations

#### Props
None (data is internal)

#### Data Structure

```tsx
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;         // 'blue' | 'cyan' | 'green' | 'purple' | 'pink' | 'indigo' | 'orange'
  gradient: string;      // 'from-blue-500 to-cyan-500'
}
```

#### Usage

```tsx
import { Services } from './components/Services';

<Services />
```

#### Service List

1. **Website Development** (Globe icon, blue)
2. **App Development** (Smartphone icon, cyan)
3. **E-Commerce Solutions** (ShoppingCart icon, green)
4. **UI/UX Design** (Palette icon, purple)
5. **Branding Services** (Briefcase icon, pink)
6. **Custom Software** (Code icon, indigo)
7. **IT Support & Maintenance** (Headphones icon, orange)

#### Key Elements

```jsx
// Service card
<div className="group relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300">
  
  // Gradient overlay on hover
  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
  
  // Icon container
  <div className={`${bg} ${text} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all group-hover:shadow-lg`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity`}></div>
    <Icon className="relative z-10 group-hover:text-white transition-colors" />
  </div>
</div>
```

---

### 4. Pricing Component

**File:** `/components/Pricing.tsx`

#### Features
- 3 pricing tiers with feature lists
- "Most Popular" badge on featured plan
- Animated check icons
- Additional services grid
- Custom quote CTA

#### Props
None (data is internal)

#### Data Structure

```tsx
interface PricingPlan {
  name: string;
  price: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  popular: boolean;
  gradient: string;
}

interface AddOn {
  name: string;
  price: string;
  icon: string; // emoji
}
```

#### Usage

```tsx
import { Pricing } from './components/Pricing';

<Pricing />
```

#### Pricing Tiers

| Tier | Price | Pages | Popular |
|------|-------|-------|---------|
| **Basic** | ₹5,999 | 5 pages | No |
| **Standard** | ₹12,999 | 10 pages | **Yes** |
| **Premium** | ₹24,999 | Unlimited | No |

#### Key Elements

```jsx
// Popular plan (highlighted)
<div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl transform md:scale-105 border-4 border-white">
  
  // "Most Popular" badge
  <div className="absolute -top-4 sm:-top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full">
    <Star size={14} fill="currentColor" />
    Most Popular
    <Star size={14} fill="currentColor" />
  </div>
  
  // Feature item
  <li className="flex items-start gap-2 sm:gap-3">
    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center bg-white/20">
      <Check size={14} className="text-white" />
    </div>
    <span className="text-xs sm:text-sm text-white">{feature}</span>
  </li>
</div>

// Add-on card
<div className="bg-white p-4 sm:p-5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-between border border-gray-100">
  <div className="flex items-center gap-2 sm:gap-3">
    <span className="text-xl sm:text-2xl">🌐</span>
    <span className="text-gray-900 font-semibold">Domain Registration</span>
  </div>
  <span className="text-blue-600 font-bold">₹999/year</span>
</div>
```

---

### 5. Contact Component

**File:** `/components/Contact.tsx`

#### Features
- Contact form with validation
- Company info cards
- Email & phone links
- Social media links
- Glass-morphism effects

#### Props
None (self-contained)

#### Usage

```tsx
import { Contact } from './components/Contact';

<Contact />
```

#### Form Fields

```tsx
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
```

#### Key Elements

```jsx
// Form container
<div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-gray-200">

// Input field
<input
  type="text"
  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all"
  placeholder="Your Name"
/>

// Textarea
<textarea
  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all resize-none"
  rows={4}
  placeholder="Tell us about your project..."
/>

// Submit button
<button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all font-semibold">
  Send Message
</button>

// Contact info card
<div className="flex items-start gap-4">
  <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-xl">
    <Mail size={24} className="text-white" />
  </div>
  <div>
    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
    <a href="mailto:info@hocx.com" className="text-blue-600 hover:text-purple-600">
      info@hocx.com
    </a>
  </div>
</div>
```

---

### 6. Footer Component

**File:** `/components/Footer.tsx`

#### Features
- Multi-column footer layout
- Quick links navigation
- Social media icons
- Copyright & legal links
- Gradient accents

#### Props
None (self-contained)

#### Usage

```tsx
import { Footer } from './components/Footer';

<Footer />
```

#### Key Elements

```jsx
// Footer container
<footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">

// Footer grid
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

// Footer link
<a className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">
  Website Development
</a>

// Social icon
<a className="text-gray-400 hover:text-white transition-all hover:scale-110">
  <Facebook size={20} />
</a>

// Copyright
<p className="text-gray-400 text-sm">
  © 2024 HOCX. All rights reserved.
</p>
```

---

## Layout Components

### Section Wrapper Pattern

```tsx
// Standard section template
<section 
  id="section-name" 
  className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
>
  {/* Background decorations */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
  </div>
  
  {/* Content container */}
  <div className="container mx-auto max-w-6xl relative z-10">
    {/* Section header */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16"
    >
      <div className="inline-block mb-3 sm:mb-4">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
          SECTION LABEL
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
        Section Title
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
        Section description
      </p>
    </motion.div>
    
    {/* Section content */}
    {children}
  </div>
</section>
```

### Card Component Pattern

```tsx
// Standard card with hover effects
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ y: -4 }}
  className="group relative bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
>
  {/* Gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
  
  {/* Card content */}
  <div className="relative z-10">
    {children}
  </div>
</motion.div>
```

---

## UI Components

### Button Variants

```tsx
// Primary button (gradient)
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all font-semibold">
  Primary Button
</button>

// Secondary button (outline)
<button className="bg-white text-gray-900 px-6 py-3 rounded-xl hover:shadow-xl transition-all border-2 border-gray-200 hover:border-purple-300 font-semibold">
  Secondary Button
</button>

// Ghost button
<button className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all">
  Ghost Button
</button>
```

### Icon Container Pattern

```tsx
// Gradient icon container
<div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-3">
  <Icon size={24} className="text-white" />
</div>

// Solid color icon container
<div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-2xl flex items-center justify-center">
  <Icon size={28} />
</div>
```

### Badge Component

```tsx
// Gradient badge
<div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg">
  <Sparkles size={18} />
  <span className="font-semibold">Badge Text</span>
  <Zap size={18} />
</div>

// Solid badge
<span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
  Badge
</span>
```

---

## Usage Examples

### Complete Page Structure

```tsx
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
```

### Adding a New Section

```tsx
// /components/NewSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

export function NewSection() {
  return (
    <section 
      id="new-section" 
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold text-sm sm:text-base">
              SECTION LABEL
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Section Title
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
            Section description text
          </p>
        </motion.div>

        {/* Section content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card items */}
        </div>
      </div>
    </section>
  );
}
```

---

## Component Testing Checklist

- [ ] Desktop view (1920px, 1440px, 1280px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px, 414px)
- [ ] Hover states
- [ ] Active states
- [ ] Loading states
- [ ] Error states
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Animation performance (60fps)

---

## Performance Tips

1. **Lazy load below-the-fold sections**
   ```tsx
   const Services = lazy(() => import('./components/Services'));
   ```

2. **Optimize animations**
   - Use `transform` and `opacity` only
   - Add `will-change: transform` for heavy animations
   - Use `viewport={{ once: true }}` to prevent re-animations

3. **Image optimization**
   - Use WebP format
   - Implement lazy loading
   - Provide proper width/height attributes

4. **Code splitting**
   - Split routes if multi-page
   - Lazy load heavy components (charts, maps)

---

## Accessibility Guidelines

1. **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
2. **ARIA Labels**: Add `aria-label` to icon buttons
3. **Focus States**: Ensure visible focus indicators
4. **Keyboard Navigation**: All interactive elements accessible via keyboard
5. **Color Contrast**: Maintain WCAG AA standards (4.5:1 for text)
6. **Alt Text**: Provide descriptive alt text for images
7. **Form Labels**: Associate labels with form inputs

---

## Next Steps

- Review component props and extend as needed
- Add custom variants to suit specific use cases
- Implement unit tests for critical components
- Document any new components following this format
