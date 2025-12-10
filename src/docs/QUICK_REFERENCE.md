# HOCX Quick Reference Guide

**One-page reference for common tasks and patterns**

---

## 🎨 Design Tokens

### Colors

```tsx
// Primary Gradient
className="bg-gradient-to-r from-blue-600 to-purple-600"

// Gradient Text
className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"

// Text Colors
text-gray-900    // Headings
text-gray-700    // Primary body text
text-gray-600    // Secondary text
text-blue-600    // Links/accents
```

### Typography

```tsx
// Hero Heading (responsive)
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"

// Section Heading
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"

// Body Text
className="text-base sm:text-lg text-gray-600"

// Small Text
className="text-sm sm:text-base text-gray-600"
```

### Spacing

```tsx
// Section Padding (vertical)
className="py-16 sm:py-20 lg:py-24"

// Section Padding (horizontal)
className="px-4 sm:px-6 lg:px-8"

// Container
className="container mx-auto max-w-6xl"

// Common Gaps
gap-4 sm:gap-6 lg:gap-8     // Grid gaps
mb-6 sm:mb-8 lg:mb-12       // Section margins
```

---

## 🧩 Component Patterns

### Section Template

```tsx
<section 
  id="section-name" 
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
        Section description
      </p>
    </motion.div>

    {/* Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {/* Items */}
    </div>
  </div>
</section>
```

### Card Component

```tsx
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
  
  {/* Content */}
  <div className="relative z-10">
    {/* Card content */}
  </div>
</motion.div>
```

### Button Variants

```tsx
// Primary Button
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:shadow-2xl transition-all shadow-lg font-semibold"
>
  Button Text
</motion.button>

// Secondary Button
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-white text-gray-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:shadow-xl transition-all border-2 border-gray-200 hover:border-purple-300 font-semibold"
>
  Button Text
</motion.button>
```

### Icon Container

```tsx
// Gradient background
<div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-3 sm:mb-4">
  <Icon size={24} className="text-white sm:w-7 sm:h-7" />
</div>

// Colored background
<div className="bg-blue-100 text-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center">
  <Icon size={28} className="sm:w-8 sm:h-8" />
</div>
```

---

## 🎬 Animation Patterns

### Fade In + Slide Up

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Fade In + Scale

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Scroll-Triggered Animation

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Staggered Children

```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    {item.content}
  </motion.div>
))}
```

### Hover Effects

```tsx
// Hover Lift
whileHover={{ y: -4, scale: 1.02 }}

// Hover Scale
whileHover={{ scale: 1.05 }}

// Tap Effect
whileTap={{ scale: 0.95 }}

// Combined
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Click Me
</motion.button>
```

---

## 📱 Responsive Grid Layouts

### 3-Column Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {/* Items */}
</div>
```

### 2-Column Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
  {/* Items */}
</div>
```

### 4-Column Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
  {/* Items */}
</div>
```

### Auto-Fit Grid

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Items */}
</div>
```

---

## 🎯 Common Functions

### Smooth Scroll Navigation

```tsx
const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Usage
<button onClick={() => scrollToSection('contact')}>
  Contact Us
</button>
```

### Form Handling

```tsx
const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: ''
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData(prev => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(formData);
  // Submit logic
};
```

---

## 🔧 TypeScript Patterns

### Component Props

```tsx
interface ComponentProps {
  title: string;
  description?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function Component({ title, description, onClick, children }: ComponentProps) {
  return <div>{title}</div>;
}
```

### Event Handlers

```tsx
// Click handler
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  event.preventDefault();
  // Logic
};

// Input change
const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  setValue(event.target.value);
};

// Form submit
const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  // Logic
};
```

### State Types

```tsx
const [isOpen, setIsOpen] = useState<boolean>(false);
const [count, setCount] = useState<number>(0);
const [name, setName] = useState<string>('');
const [items, setItems] = useState<string[]>([]);
const [user, setUser] = useState<User | null>(null);
```

---

## 🎨 Gradient Examples

### Background Gradients

```tsx
// Horizontal
className="bg-gradient-to-r from-blue-600 to-purple-600"

// Diagonal
className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"

// Vertical
className="bg-gradient-to-b from-blue-50 to-white"

// Subtle background
className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
```

### Text Gradients

```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
```

### Border Gradients (Workaround)

```tsx
<div className="p-[2px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
  <div className="bg-white rounded-xl p-6">
    Content
  </div>
</div>
```

---

## ♿ Accessibility Quick Fixes

### Icon-Only Button

```tsx
<button aria-label="Open menu">
  <Menu size={24} />
</button>
```

### Form Input

```tsx
<label htmlFor="email">Email</label>
<input 
  id="email" 
  type="email"
  aria-required="true"
  aria-invalid={hasError}
/>
{hasError && (
  <p id="email-error" role="alert">
    Please enter a valid email
  </p>
)}
```

### Focus Styles

```tsx
className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
```

### Screen Reader Only Text

```tsx
<span className="sr-only">
  Additional context for screen readers
</span>
```

---

## 📦 Import Shortcuts

```tsx
// React
import { useState, useEffect, useCallback, useMemo } from 'react';

// Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

// Icons (import only what you need)
import { ArrowRight, Menu, X, Mail, Phone, MapPin } from 'lucide-react';

// Components
import { Header } from './components/Header';
import { Footer } from './components/Footer';
```

---

## 🐛 Common Issues & Solutions

### Issue: Hydration Mismatch

```tsx
// ❌ Problem: Different content on server/client
const RandomComponent = () => {
  return <div>{Math.random()}</div>;
};

// ✅ Solution: Use useEffect
const RandomComponent = () => {
  const [random, setRandom] = useState(0);
  useEffect(() => {
    setRandom(Math.random());
  }, []);
  return <div>{random}</div>;
};
```

### Issue: Missing Key Prop

```tsx
// ❌ Problem
{items.map(item => <div>{item}</div>)}

// ✅ Solution
{items.map((item, index) => <div key={item.id || index}>{item}</div>)}
```

### Issue: State Not Updating

```tsx
// ❌ Problem: Mutating state
const addItem = () => {
  items.push(newItem);
  setItems(items);
};

// ✅ Solution: Create new array
const addItem = () => {
  setItems([...items, newItem]);
};
```

---

## 🚀 Build & Deploy

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)

# Production
npm run build        # Build for production (output: /dist)
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
npm run lint:fix     # Fix auto-fixable issues

# Type checking
npx tsc --noEmit     # Check TypeScript types
```

---

## 📊 Performance Checklist

- [ ] Lazy load below-the-fold components
- [ ] Use `viewport={{ once: true }}` for scroll animations
- [ ] Optimize images (WebP, lazy loading)
- [ ] Remove unused dependencies
- [ ] Use React.memo for expensive components
- [ ] Minimize Framer Motion animations
- [ ] Enable compression (gzip/brotli)
- [ ] Add resource hints (preconnect, dns-prefetch)
- [ ] Test on slow network (Fast 3G)
- [ ] Run Lighthouse audit (target: 90+)

---

## 📝 File Paths

```
/App.tsx                          → Main app component
/components/Header.tsx            → Sticky header
/components/Hero.tsx              → Hero section
/components/Services.tsx          → Services grid
/components/Pricing.tsx           → Pricing plans
/components/Contact.tsx           → Contact form
/components/Footer.tsx            → Footer
/styles/globals.css               → Global styles
/docs/DESIGN_SYSTEM.md           → Design tokens
/docs/COMPONENT_LIBRARY.md       → Component docs
/docs/CODE_STYLE_GUIDE.md        → Coding standards
/docs/DEVELOPER_HANDOFF.md       → Developer guide
/docs/ACCESSIBILITY_GUIDE.md     → A11y guidelines
/docs/PERFORMANCE_OPTIMIZATION.md → Performance tips
```

---

## 🔗 Useful Links

- [Tailwind CSS Docs](https://tailwindcss.com/docs) – Styling reference
- [Framer Motion Docs](https://www.framer.com/motion/) – Animation API
- [Lucide Icons](https://lucide.dev/) – Icon search
- [React Docs](https://react.dev/) – React reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) – TS guide
- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/) – Accessibility

---

## 💡 Pro Tips

1. **Always use responsive classes**: `text-base sm:text-lg lg:text-xl`
2. **Mobile-first approach**: Design for mobile, then scale up
3. **Use semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
4. **Add ARIA labels** to icon-only buttons
5. **Test with keyboard navigation** regularly
6. **Use `once: true`** for scroll animations to improve performance
7. **Prefer CSS animations** for simple effects (better performance)
8. **Always provide loading states** for async operations
9. **Use TypeScript** strictly (no `any` types)
10. **Test on real devices**, not just browser DevTools

---

**Quick Reference Version:** 1.0  
**Last Updated:** December 2024

**Need more details?** Check the full documentation in `/docs/`
