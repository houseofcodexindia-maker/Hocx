# HOCX Asset Catalog & Export Guide

**Version:** 1.0  
**Last Updated:** December 2024  
**Project:** HOCX Website

---

## Table of Contents

1. [Overview](#overview)
2. [Design Tokens](#design-tokens)
3. [Icon Library](#icon-library)
4. [Animation Assets](#animation-assets)
5. [Component Assets](#component-assets)
6. [Export Guidelines](#export-guidelines)
7. [Asset Management](#asset-management)

---

## Overview

### Asset Strategy

The HOCX website follows a **minimal asset** approach:

- ✅ **No Custom Fonts** – System font stack for optimal performance
- ✅ **No Raster Images** – Pure CSS/SVG design
- ✅ **Icon Library** – Lucide React icons (tree-shakeable)
- ✅ **CSS Animations** – Keyframe animations in globals.css
- ✅ **Inline SVG** – No external SVG files

### Performance Benefits

| Asset Type | Traditional | HOCX Approach | Savings |
|------------|-------------|---------------|---------|
| **Fonts** | ~100KB | 0KB (system fonts) | 100% |
| **Images** | ~500KB | 0KB (CSS only) | 100% |
| **Icons** | ~50KB | ~15KB (tree-shaken) | 70% |
| **Total** | ~650KB | ~15KB | **98% reduction** |

---

## Design Tokens

### Color Tokens (CSS Variables)

```css
/* Brand Colors - Primary */
--color-blue-600: #2563eb;
--color-blue-500: #3b82f6;
--color-purple-600: #9333ea;
--color-purple-500: #a855f7;
--color-cyan-500: #06b6d4;
--color-pink-600: #db2777;
--color-pink-500: #ec4899;

/* Neutral Colors */
--color-gray-900: #111827;
--color-gray-700: #374151;
--color-gray-600: #4b5563;
--color-gray-500: #6b7280;
--color-gray-400: #9ca3af;
--color-gray-300: #d1d5db;
--color-gray-200: #e5e7eb;
--color-gray-100: #f3f4f6;
--color-gray-50: #f9fafb;
--color-white: #ffffff;

/* Functional Colors */
--color-green-600: #16a34a;
--color-green-500: #22c55e;
--color-orange-500: #f97316;
--color-red-600: #dc2626;
```

### Gradient Tokens

```css
/* Primary Gradients */
--gradient-primary: linear-gradient(to right, #2563eb, #9333ea);
--gradient-primary-vertical: linear-gradient(to bottom, #2563eb, #9333ea);
--gradient-hero: linear-gradient(to right, #2563eb, #9333ea, #ec4899);
--gradient-accent: linear-gradient(to right, #0ea5e9, #3b82f6);

/* Service-Specific Gradients */
--gradient-blue: linear-gradient(to right, #3b82f6, #06b6d4);
--gradient-cyan: linear-gradient(to right, #06b6d4, #3b82f6);
--gradient-green: linear-gradient(to right, #22c55e, #10b981);
--gradient-purple: linear-gradient(to right, #a855f7, #ec4899);
--gradient-pink: linear-gradient(to right, #ec4899, #f43f5e);
--gradient-indigo: linear-gradient(to right, #6366f1, #a855f7);
--gradient-orange: linear-gradient(to right, #f97316, #ef4444);

/* Background Gradients */
--gradient-background-subtle: linear-gradient(to bottom right, #eff6ff, #faf5ff, #fce7f3);
--gradient-background-dark: linear-gradient(to bottom right, #2563eb, #9333ea, #ec4899);
```

### Typography Tokens

```css
/* Font Family */
--font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
  'Helvetica Neue', sans-serif;

/* Font Sizes (Desktop) */
--font-size-hero: 90px;    /* 5.625rem */
--font-size-h1: 72px;      /* 4.5rem */
--font-size-h2: 60px;      /* 3.75rem */
--font-size-h3: 48px;      /* 3rem */
--font-size-h4: 36px;      /* 2.25rem */
--font-size-h5: 24px;      /* 1.5rem */
--font-size-body-lg: 20px; /* 1.25rem */
--font-size-body: 16px;    /* 1rem */
--font-size-body-sm: 14px; /* 0.875rem */
--font-size-caption: 12px; /* 0.75rem */

/* Font Weights */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line Heights */
--line-height-tight: 1.1;
--line-height-snug: 1.2;
--line-height-normal: 1.5;
--line-height-relaxed: 1.6;
```

### Spacing Tokens

```css
/* Spacing Scale (4px base unit) */
--spacing-1: 4px;    /* 0.25rem */
--spacing-2: 8px;    /* 0.5rem */
--spacing-3: 12px;   /* 0.75rem */
--spacing-4: 16px;   /* 1rem */
--spacing-5: 20px;   /* 1.25rem */
--spacing-6: 24px;   /* 1.5rem */
--spacing-8: 32px;   /* 2rem */
--spacing-10: 40px;  /* 2.5rem */
--spacing-12: 48px;  /* 3rem */
--spacing-16: 64px;  /* 4rem */
--spacing-20: 80px;  /* 5rem */
--spacing-24: 96px;  /* 6rem */

/* Section Spacing */
--section-padding-mobile: 64px;   /* py-16 */
--section-padding-tablet: 80px;   /* py-20 */
--section-padding-desktop: 96px;  /* py-24 */

/* Container Max-Widths */
--container-max-width: 1152px;  /* max-w-6xl */
--container-narrow: 896px;      /* max-w-4xl */
--container-text: 672px;        /* max-w-2xl */
```

### Border Radius Tokens

```css
/* Border Radius */
--radius-sm: 8px;     /* 0.5rem - rounded-lg */
--radius-md: 12px;    /* 0.75rem - rounded-xl */
--radius-lg: 16px;    /* 1rem - rounded-2xl */
--radius-xl: 24px;    /* 1.5rem - rounded-3xl */
--radius-full: 9999px; /* rounded-full */
```

### Shadow Tokens

```css
/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

### Transition Tokens

```css
/* Transitions */
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease;

/* Animation Durations */
--animation-blob: 10s;
--animation-gradient: 5s;
--animation-scroll: 2s;
```

---

## Icon Library

### Lucide React Icons Used

**Navigation & UI (lucide-react package)**

```tsx
import {
  // Navigation
  Menu,
  X,
  ArrowRight,
  
  // Features
  Globe,
  ShoppingCart,
  Palette,
  Briefcase,
  Code,
  Headphones,
  Smartphone,
  
  // Pricing
  Check,
  Star,
  Zap,
  Crown,
  
  // Contact
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  
  // Decorative
  Sparkles,
} from 'lucide-react';
```

### Icon Size Standards

```tsx
// Desktop sizes
size={28}  // Service cards (standard)
size={24}  // Headers, medium icons
size={20}  // Contact info, small icons
size={18}  // Buttons, inline icons
size={14}  // Decorative, badges

// Responsive pattern
className="w-5 h-5 sm:w-6 sm:h-6"  // 20px → 24px
className="w-6 h-6 sm:w-7 sm:h-7"  // 24px → 28px
```

### Icon Colors

```tsx
// Primary brand icons
className="text-blue-600"

// On colored backgrounds
className="text-white"

// Service-specific
text-blue-600   // Web development
text-cyan-600   // App development
text-green-600  // E-commerce
text-purple-600 // Design
text-pink-600   // Branding
text-indigo-600 // Software
text-orange-600 // Support
```

---

## Animation Assets

### Keyframe Animations (in /styles/globals.css)

#### 1. Blob Animation

```css
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(15px, -30px) scale(1.05);
  }
  50% {
    transform: translate(-15px, 15px) scale(0.95);
  }
  75% {
    transform: translate(30px, 30px) scale(1.02);
  }
}

.animate-blob {
  animation: blob 10s infinite;
}
```

**Usage:**
- Background decorative blobs
- Floating geometric shapes
- Duration: 10 seconds
- Delays: 0s, 2s, 4s (for staggered effect)

#### 2. Gradient Animation

```css
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 5s ease infinite;
}
```

**Usage:**
- Animated gradient text
- Background gradients
- Duration: 5 seconds

### Framer Motion Presets

#### Fade In + Slide Up

```tsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

**Used in:** Section headers, text content

#### Fade In + Scale

```tsx
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
```

**Used in:** Badges, cards, modals

#### Hover Lift

```tsx
whileHover={{ y: -4, scale: 1.02 }}
```

**Used in:** Cards, service items

#### Hover Scale

```tsx
whileHover={{ scale: 1.05 }}
```

**Used in:** Buttons, interactive elements

#### Tap Feedback

```tsx
whileTap={{ scale: 0.95 }}
```

**Used in:** All clickable elements

#### Staggered Children

```tsx
transition={{ duration: 0.5, delay: index * 0.1 }}
```

**Used in:** Grid items, lists

#### Scroll Trigger

```tsx
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

**Used in:** All sections for scroll-triggered animations

---

## Component Assets

### Service Icons Mapping

| Service | Icon | Color | Gradient |
|---------|------|-------|----------|
| Website Development | Globe | Blue | blue-500 to cyan-500 |
| App Development | Smartphone | Cyan | cyan-500 to blue-500 |
| E-Commerce | ShoppingCart | Green | green-500 to emerald-500 |
| UI/UX Design | Palette | Purple | purple-500 to pink-500 |
| Branding | Briefcase | Pink | pink-500 to rose-500 |
| Custom Software | Code | Indigo | indigo-500 to purple-500 |
| IT Support | Headphones | Orange | orange-500 to red-500 |

### Pricing Tier Icons

| Tier | Icon | Color |
|------|------|-------|
| Basic Website | Zap | Blue/Cyan |
| Standard Website | Star | Purple/Pink (Popular) |
| Premium Website | Crown | Orange/Red |

### Contact Icons

| Contact Type | Icon | Gradient |
|--------------|------|----------|
| Email | Mail | blue-500 to cyan-500 |
| Phone | Phone | green-500 to emerald-500 |
| Location | MapPin | purple-500 to pink-500 |

---

## Export Guidelines

### For Design Handoff

**CSS Variables Export:**

```css
/* Copy from /styles/globals.css */
/* Create a variables.css file with all tokens */

:root {
  /* All design tokens listed above */
}
```

**Tailwind Config Export:**

```javascript
// If needed for external tools
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2563eb',
        'brand-purple': '#9333ea',
        'brand-cyan': '#06b6d4',
        'brand-pink': '#db2777',
      },
      fontSize: {
        'hero': ['90px', { lineHeight: '1.1' }],
        'h1': ['72px', { lineHeight: '1.2' }],
        'h2': ['60px', { lineHeight: '1.2' }],
        'h3': ['48px', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
      },
    },
  },
};
```

### For Figma Import

**Color Styles:**
1. Create color variables in Figma:
   - Blue/600 → #2563eb
   - Purple/600 → #9333ea
   - Etc. (all tokens above)

**Text Styles:**
1. Hero/Desktop → 90px, Bold, Gray 900
2. H1/Desktop → 72px, Bold, Gray 900
3. H2/Desktop → 60px, Bold, Gray 900
4. Body/Large → 20px, Regular, Gray 600
5. Body/Default → 16px, Regular, Gray 600

**Effects (Shadows):**
1. Shadow/SM → Copy shadow-sm values
2. Shadow/LG → Copy shadow-lg values
3. Shadow/2XL → Copy shadow-2xl values

---

## Asset Management

### File Organization

```
/styles/
  └── globals.css          # All animations, custom styles

/components/
  ├── Header.tsx           # Uses: Menu, X icons
  ├── Hero.tsx             # Uses: Sparkles, Zap, Star, ArrowRight
  ├── Services.tsx         # Uses: 7 service icons
  ├── Pricing.tsx          # Uses: Check, Star, Zap, Crown
  ├── Contact.tsx          # Uses: Mail, Phone, MapPin, Send, MessageCircle, Clock
  └── Footer.tsx           # Uses: Globe, Mail, Phone, MapPin

/components/ui/
  └── [40+ shadcn components] # Pre-built UI primitives
```

### Dependencies for Assets

```json
{
  "dependencies": {
    "lucide-react": "latest",      // Icon library
    "framer-motion": "latest",     // Animation library
    "react": "^18.0.0",
    "tailwindcss": "^4.0.0"
  }
}
```

### Icon Usage Best Practices

```tsx
// ✅ Good: Import only what you need
import { Globe, ShoppingCart } from 'lucide-react';

// ❌ Bad: Import everything
import * as Icons from 'lucide-react';

// ✅ Good: Use consistent sizing
<Globe size={28} className="text-blue-600" />

// ✅ Good: Responsive sizing
<Globe className="w-6 h-6 sm:w-7 sm:h-7" />
```

---

## Design System Export Checklist

### For Developers

- [x] All color tokens documented
- [x] All typography tokens documented
- [x] All spacing tokens documented
- [x] All animation keyframes documented
- [x] All icon mappings documented
- [x] All gradients documented
- [x] All shadows documented
- [x] All border radii documented

### For Designers

- [ ] Export color palette to Figma/Sketch
- [ ] Create text style library
- [ ] Document component variants
- [ ] Export icon set with naming conventions
- [ ] Create gradient swatches
- [ ] Document animation timing
- [ ] Create shadow/elevation styles

### For External Teams

- [ ] Provide CSS variables file
- [ ] Provide Tailwind config (if needed)
- [ ] Document icon library source
- [ ] Provide animation specifications
- [ ] Share responsive breakpoints
- [ ] Document spacing scale
- [ ] Share brand guidelines

---

## Asset Update Workflow

### When Adding New Assets

1. **Icons:**
   ```bash
   # Icons are imported from lucide-react
   # No files to manage, just update imports
   import { NewIcon } from 'lucide-react';
   ```

2. **Animations:**
   ```css
   /* Add to /styles/globals.css */
   @keyframes new-animation {
     /* keyframes */
   }
   ```

3. **Colors:**
   ```tsx
   // Add to design system documentation
   // Use Tailwind's built-in colors or extend in config
   ```

### Version Control

```bash
# All assets tracked in git
git add styles/globals.css
git add components/**/*.tsx
git commit -m "Add new animation/icon/color"
```

---

## Performance Optimization

### Icon Optimization

**Tree Shaking:**
- Lucide React supports tree-shaking
- Only imported icons are bundled
- ~15KB total for all icons used

**Example:**
```tsx
// Each icon adds ~1-2KB
import { Globe } from 'lucide-react'; // +1.5KB
```

### Animation Optimization

**GPU Acceleration:**
```css
/* ✅ Good: GPU-accelerated properties */
transform: translate(0, 0);
opacity: 1;

/* ❌ Bad: CPU-heavy properties */
top: 0;
left: 0;
width: 100px;
```

**Will-Change:**
```css
/* Applied automatically by Framer Motion */
.motion-element {
  will-change: transform, opacity;
}
```

---

## Quick Reference

### Most-Used Assets

**Gradients:**
```tsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
```

**Icons:**
```tsx
<ArrowRight size={18} />  // Buttons
<Check size={16} />       // Lists
<Star size={20} />        // Ratings
```

**Animations:**
```tsx
whileHover={{ y: -4 }}
whileTap={{ scale: 0.95 }}
```

---

**Asset Catalog Version:** 1.0  
**Created:** December 2024  
**Project:** HOCX Website  
**Total Asset Size:** ~15KB (icons only)  
**Performance Impact:** Minimal (98% reduction vs. traditional approach)
