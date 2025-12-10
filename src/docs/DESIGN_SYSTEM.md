# HOCX Design System Documentation

**Version:** 1.0  
**Last Updated:** December 2024  
**Framework:** React + TypeScript + Tailwind CSS v4.0

---

## Table of Contents

1. [Overview](#overview)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing System](#spacing-system)
5. [Shadows & Elevation](#shadows--elevation)
6. [Breakpoints & Grid](#breakpoints--grid)
7. [Animations & Motion](#animations--motion)
8. [Effects & Filters](#effects--filters)

---

## Overview

The HOCX design system is inspired by premium tech companies (Stripe, Linear, Vercel) and emphasizes:

- **Minimalism**: Clean layouts with generous white space
- **Premium Feel**: Gradient accents, glass-morphism, subtle shadows
- **Modern Typography**: Large hero text (70-90px), Inter/SF Pro font stack
- **Geometric Design**: Grid-based layouts, sharp corners (no rounded icons)
- **Neon Accents**: Blue/cyan/purple gradients for visual interest

---

## Color System

### Brand Colors

```css
/* Primary Gradients */
--gradient-primary: linear-gradient(to right, #2563eb, #9333ea);
--gradient-accent: linear-gradient(to right, #0ea5e9, #3b82f6);
--gradient-warm: linear-gradient(to right, #f97316, #ef4444);
--gradient-success: linear-gradient(to right, #10b981, #059669);

/* Neon/Glow Gradients */
--gradient-hero: linear-gradient(to right, #2563eb, #9333ea, #ec4899);
--gradient-background: linear-gradient(to br, #eff6ff, #faf5ff, #fce7f3);
```

### Core Palette

| Color Token | Hex Code | Usage |
|------------|----------|-------|
| **Blue 600** | `#2563eb` | Primary brand color, CTAs |
| **Blue 500** | `#3b82f6` | Hover states, accents |
| **Purple 600** | `#9333ea` | Secondary brand color |
| **Purple 500** | `#a855f7` | Hover states |
| **Cyan 500** | `#06b6d4` | Tech/innovation accent |
| **Pink 600** | `#db2777` | Gradient termination |

### Neutral Palette

| Color Token | Hex Code | Usage |
|------------|----------|-------|
| **Gray 900** | `#111827` | Headings, primary text |
| **Gray 700** | `#374151` | Body text |
| **Gray 600** | `#4b5563` | Secondary text |
| **Gray 400** | `#9ca3af` | Disabled states |
| **Gray 200** | `#e5e7eb` | Borders |
| **Gray 100** | `#f3f4f6` | Backgrounds |
| **Gray 50** | `#f9fafb` | Subtle backgrounds |
| **White** | `#ffffff` | Primary background |

### Functional Colors

| Purpose | Color | Class |
|---------|-------|-------|
| Success | Green 600 | `text-green-600`, `bg-green-600` |
| Warning | Orange 500 | `text-orange-500`, `bg-orange-500` |
| Error | Red 600 | `text-red-600`, `bg-red-600` |
| Info | Blue 500 | `text-blue-500`, `bg-blue-500` |

---

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Note:** System fonts ensure optimal performance and native feel across all platforms.

### Type Scale

| Element | Font Size | Line Height | Weight | Tailwind Class |
|---------|-----------|-------------|--------|----------------|
| **Hero H1** | 72-90px | 1.1 | 700 | `text-7xl` / `text-8xl` |
| **H1** | 60-72px | 1.2 | 700 | `text-6xl` |
| **H2** | 48-60px | 1.2 | 700 | `text-5xl` / `text-6xl` |
| **H3** | 36-48px | 1.3 | 700 | `text-4xl` / `text-5xl` |
| **H4** | 24-30px | 1.4 | 600 | `text-2xl` / `text-3xl` |
| **Body Large** | 20-24px | 1.6 | 400 | `text-xl` / `text-2xl` |
| **Body** | 16-18px | 1.6 | 400 | `text-base` / `text-lg` |
| **Body Small** | 14px | 1.5 | 400 | `text-sm` |
| **Caption** | 12px | 1.4 | 500 | `text-xs` |

### Typography Guidelines

- **Hero Text**: Use `text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl` for responsive scaling
- **Section Headers**: Always bold (font-bold), dark gray (text-gray-900)
- **Body Text**: Regular weight, gray-600 for secondary, gray-700 for primary
- **Gradient Text**: Use `bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`

### Spacing

- **Letter Spacing**: Default tracking (no custom letter-spacing)
- **Line Height**: Generous for readability (leading-relaxed on body text)
- **Paragraph Spacing**: `mb-4` or `mb-6` between paragraphs

---

## Spacing System

### Base Unit: 4px (0.25rem)

| Token | Value | Usage |
|-------|-------|-------|
| `spacing-1` | 4px | Tiny gaps |
| `spacing-2` | 8px | Small gaps |
| `spacing-3` | 12px | Default gaps |
| `spacing-4` | 16px | Medium gaps |
| `spacing-6` | 24px | Large gaps |
| `spacing-8` | 32px | XL gaps |
| `spacing-12` | 48px | Section padding |
| `spacing-16` | 64px | Large sections |
| `spacing-20` | 80px | Hero sections |
| `spacing-24` | 96px | Max section spacing |

### Section Spacing (Responsive)

```jsx
// Standard section padding
className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"

// Hero section padding
className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-20 lg:pb-32"
```

### Container Spacing

```jsx
// Content container
className="container mx-auto max-w-6xl"

// Text container
className="max-w-2xl mx-auto"

// Narrow container
className="max-w-4xl mx-auto"
```

---

## Shadows & Elevation

### Shadow Scale

```css
/* Tailwind Shadow Classes */
shadow-sm    → 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadow       → 0 1px 3px 0 rgb(0 0 0 / 0.1)
shadow-md    → 0 4px 6px -1px rgb(0 0 0 / 0.1)
shadow-lg    → 0 10px 15px -3px rgb(0 0 0 / 0.1)
shadow-xl    → 0 20px 25px -5px rgb(0 0 0 / 0.1)
shadow-2xl   → 0 25px 50px -12px rgb(0 0 0 / 0.25)
```

### Usage Guidelines

| Element | Shadow | Hover Shadow |
|---------|--------|--------------|
| Cards | `shadow-lg` | `shadow-2xl` |
| Buttons | `shadow-lg` | `shadow-xl` |
| Headers | `shadow-sm` | — |
| Modals | `shadow-2xl` | — |
| Dropdowns | `shadow-xl` | — |

---

## Breakpoints & Grid

### Responsive Breakpoints

| Breakpoint | Min Width | Device Target |
|------------|-----------|---------------|
| **sm** | 640px | Large phones |
| **md** | 768px | Tablets |
| **lg** | 1024px | Laptops |
| **xl** | 1280px | Desktops |
| **2xl** | 1536px | Large screens |

### Grid System

```jsx
// 3-column responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

// 2-column responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// Stats grid (1-3 columns)
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
```

### Container Max-Widths

```jsx
max-w-6xl  → 1152px (Standard sections)
max-w-4xl  → 896px  (Narrow content)
max-w-2xl  → 672px  (Text content)
```

---

## Animations & Motion

### Custom Keyframe Animations

```css
/* Blob Animation (10s infinite) */
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(15px, -30px) scale(1.05); }
  50% { transform: translate(-15px, 15px) scale(0.95); }
  75% { transform: translate(30px, 30px) scale(1.02); }
}

/* Gradient Animation (5s infinite) */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

### Framer Motion Patterns

```jsx
// Fade in + slide up
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}

// Fade in + scale
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}

// Hover lift
whileHover={{ y: -4, scale: 1.02 }}

// Tap feedback
whileTap={{ scale: 0.95 }}

// Stagger children
transition={{ duration: 0.5, delay: index * 0.1 }}
```

### Animation Delays

```css
.animation-delay-2000 { animation-delay: 2s; }
.animation-delay-4000 { animation-delay: 4s; }
```

### Scroll Animations

```jsx
// Viewport trigger (once)
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```

---

## Effects & Filters

### Glass-morphism

```jsx
className="bg-white/80 backdrop-blur-sm"
className="bg-white/90 backdrop-blur-md"
```

### Blur Effects

```jsx
blur-sm    → 4px
blur       → 8px
blur-lg    → 16px
blur-xl    → 24px
blur-3xl   → 64px (background decorations)
```

### Gradient Backgrounds

```jsx
// Subtle background gradient
className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"

// Dark gradient overlay
className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"

// Hover gradient overlay
className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5"
```

### Blend Modes

```jsx
// Blob decorations
className="mix-blend-multiply filter blur-xl"

// Overlays
className="mix-blend-overlay"
```

---

## Design Tokens Export

### CSS Variables (for reference)

```css
:root {
  /* Brand Colors */
  --color-brand-blue: #2563eb;
  --color-brand-purple: #9333ea;
  --color-brand-cyan: #06b6d4;
  --color-brand-pink: #db2777;
  
  /* Neutral Colors */
  --color-gray-900: #111827;
  --color-gray-700: #374151;
  --color-gray-600: #4b5563;
  --color-gray-200: #e5e7eb;
  --color-white: #ffffff;
  
  /* Spacing */
  --spacing-unit: 4px;
  --section-padding-mobile: 64px;
  --section-padding-desktop: 96px;
  
  /* Typography */
  --font-size-hero: 72px;
  --font-size-h1: 60px;
  --font-size-h2: 48px;
  --font-size-body: 16px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 500ms;
}
```

---

## Best Practices

1. **Consistency**: Always use design tokens from this system
2. **Responsive**: Mobile-first approach with responsive modifiers
3. **Performance**: Use system fonts, optimize animations
4. **Accessibility**: Maintain WCAG AA contrast ratios (4.5:1 for text)
5. **White Space**: Err on the side of more spacing for premium feel

---

## Quick Reference

```jsx
// Standard section wrapper
<section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto max-w-6xl">
    {/* Content */}
  </div>
</section>

// Card component
<div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-100 hover:shadow-2xl transition-all">
  {/* Card content */}
</div>

// Primary button
<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all font-semibold">
  Button Text
</button>

// Gradient text
<h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
  Gradient Heading
</h1>
```
