# HOCX Code Style Guide

**Language:** TypeScript  
**Framework:** React 18  
**Styling:** Tailwind CSS v4.0  
**Linting:** ESLint + Prettier (recommended)

---

## Table of Contents

1. [TypeScript Guidelines](#typescript-guidelines)
2. [React Best Practices](#react-best-practices)
3. [Tailwind CSS Conventions](#tailwind-css-conventions)
4. [File & Folder Structure](#file--folder-structure)
5. [Naming Conventions](#naming-conventions)
6. [Import Organization](#import-organization)
7. [Animation Guidelines](#animation-guidelines)
8. [Comments & Documentation](#comments--documentation)

---

## TypeScript Guidelines

### Type Definitions

```tsx
// ✅ Good: Define types for props
interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

// ✅ Good: Use type for simple objects
type PricingTier = {
  name: string;
  price: string;
  popular: boolean;
};

// ❌ Bad: Using 'any' type
const data: any = fetchData();

// ✅ Good: Properly typed
const data: ServiceData = fetchData();
```

### Function Types

```tsx
// ✅ Good: Typed event handlers
const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
  event.preventDefault();
  // ...
};

// ✅ Good: Typed form handlers
const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
  event.preventDefault();
  // ...
};

// ✅ Good: Typed state
const [isOpen, setIsOpen] = useState<boolean>(false);
const [formData, setFormData] = useState<FormData>({
  name: '',
  email: '',
});
```

### Enums vs Union Types

```tsx
// ✅ Good: Use union types for string constants
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ColorScheme = 'blue' | 'purple' | 'green' | 'orange';

// ❌ Avoid: Enums (unless you need reverse mapping)
enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}
```

---

## React Best Practices

### Component Structure

```tsx
// ✅ Good: Functional component with proper structure
import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';

interface ComponentProps {
  title: string;
  description?: string; // Optional props marked with ?
}

export function ComponentName({ title, description }: ComponentProps) {
  // 1. Hooks
  const [state, setState] = useState<string>('');
  
  // 2. Event handlers
  const handleClick = (): void => {
    setState('new value');
  };
  
  // 3. Computed values
  const isActive = state === 'active';
  
  // 4. Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

### Hooks Rules

```tsx
// ✅ Good: Hooks at top level
export function Component() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Effect logic
  }, []);
  
  return <div />;
}

// ❌ Bad: Hooks inside conditionals
export function Component({ show }: { show: boolean }) {
  if (show) {
    const [count, setCount] = useState(0); // ❌ Wrong
  }
}

// ✅ Good: Conditional logic inside hook
export function Component({ show }: { show: boolean }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (show) {
      // Conditional logic here
    }
  }, [show]);
}
```

### Props Destructuring

```tsx
// ✅ Good: Destructure props in function signature
export function Card({ title, description, icon }: CardProps) {
  return <div>{title}</div>;
}

// ❌ Bad: Using props object
export function Card(props: CardProps) {
  return <div>{props.title}</div>;
}

// ✅ Good: Default values
export function Card({ 
  title, 
  description = 'Default description',
  showIcon = true 
}: CardProps) {
  return <div>{description}</div>;
}
```

### Key Props

```tsx
// ✅ Good: Use stable, unique keys
{services.map((service, index) => (
  <ServiceCard 
    key={service.id}  // Use unique ID
    {...service} 
  />
))}

// ⚠️ Acceptable: Index as key (only if list is static)
{items.map((item, index) => (
  <div key={index}>{item}</div>
))}

// ❌ Bad: No key prop
{items.map((item) => (
  <div>{item}</div>
))}
```

---

## Tailwind CSS Conventions

### Class Organization

```tsx
// ✅ Good: Logical grouping (layout → spacing → typography → colors → effects)
<div className="
  relative flex items-center justify-center
  px-4 py-6 gap-4
  text-lg font-semibold
  bg-white text-gray-900
  rounded-xl shadow-lg
  hover:shadow-2xl transition-all
">
```

### Responsive Design

```tsx
// ✅ Good: Mobile-first approach
<div className="
  text-sm       /* Mobile: 14px */
  sm:text-base  /* Tablet: 16px */
  lg:text-lg    /* Desktop: 18px */
">

// ✅ Good: Responsive spacing
<section className="
  py-16        /* Mobile: 64px */
  sm:py-20     /* Tablet: 80px */
  lg:py-24     /* Desktop: 96px */
  px-4 sm:px-6 lg:px-8
">
```

### Color Utilities

```tsx
// ✅ Good: Use Tailwind color scale
<div className="bg-blue-600 text-white">

// ✅ Good: Gradient text
<h1 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

// ❌ Bad: Arbitrary values (use sparingly)
<div className="bg-[#123456]">

// ✅ Better: Define in theme if needed frequently
<div className="bg-brand-primary">
```

### Avoiding Custom CSS

```tsx
// ✅ Good: Use Tailwind utilities
<div className="mt-4 mb-6 px-8 py-4 rounded-xl shadow-lg">

// ❌ Bad: Inline styles
<div style={{ marginTop: '1rem', padding: '1rem' }}>

// ⚠️ Acceptable: Only for dynamic values
<div style={{ width: `${progress}%` }}>
```

### Group Hover Pattern

```tsx
// ✅ Good: Group hover for child elements
<div className="group">
  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
    Hidden until parent hover
  </div>
</div>
```

### Don't Override Typography

```tsx
// ❌ Bad: Overriding default typography (unless requested)
<h1 className="text-4xl font-bold leading-tight">

// ✅ Good: Let globals.css handle it
<h1>Title Text</h1>

// ✅ Good: Only when customizing
<h1 className="text-6xl">Larger title</h1>
```

---

## File & Folder Structure

### Recommended Structure

```
/
├── /components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── /ui
│       ├── button.tsx
│       ├── input.tsx
│       └── card.tsx
├── /docs
│   ├── DESIGN_SYSTEM.md
│   ├── COMPONENT_LIBRARY.md
│   └── CODE_STYLE_GUIDE.md
├── /styles
│   └── globals.css
├── /utils (optional)
│   ├── cn.ts            // classnames utility
│   └── validators.ts
├── /types (optional)
│   └── index.ts
├── App.tsx
└── index.tsx
```

### Component File Naming

```bash
# ✅ Good: PascalCase for components
Header.tsx
ServiceCard.tsx
PricingTable.tsx

# ✅ Good: kebab-case for utilities
utils/class-names.ts
hooks/use-scroll-position.ts

# ❌ Bad: Inconsistent naming
header.tsx
serviceCard.tsx
pricing_table.tsx
```

---

## Naming Conventions

### Components

```tsx
// ✅ Good: PascalCase, descriptive names
export function ServiceCard() {}
export function PricingTable() {}
export function ContactForm() {}

// ❌ Bad: Generic or unclear names
export function Card() {}
export function Component1() {}
export function Comp() {}
```

### Variables

```tsx
// ✅ Good: camelCase for variables
const isActive = true;
const userEmail = 'user@example.com';
const serviceList = [...];

// ✅ Good: UPPER_CASE for constants
const API_ENDPOINT = 'https://api.example.com';
const MAX_RETRY_COUNT = 3;

// ❌ Bad: Unclear names
const data = [];
const temp = 0;
const x = true;
```

### Event Handlers

```tsx
// ✅ Good: Use 'handle' prefix
const handleClick = () => {};
const handleSubmit = () => {};
const handleInputChange = () => {};

// ✅ Good: Use 'on' prefix for props
<Button onClick={handleClick} />
<Form onSubmit={handleSubmit} />

// ❌ Bad: Unclear naming
const click = () => {};
const doSomething = () => {};
```

### Boolean Variables

```tsx
// ✅ Good: Use 'is', 'has', 'should' prefixes
const isLoading = true;
const hasError = false;
const shouldRender = true;
const canSubmit = false;

// ❌ Bad: Unclear boolean names
const loading = true;
const error = false;
const render = true;
```

---

## Import Organization

### Import Order

```tsx
// 1. React & external libraries
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

// 2. Internal components
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// 3. UI components
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';

// 4. Utils & types
import { cn } from './utils/class-names';
import type { ServiceData } from './types';

// 5. Styles (if needed)
import './styles/custom.css';
```

### Named vs Default Exports

```tsx
// ✅ Good: Named exports (preferred for components)
export function Header() {}
export function Footer() {}

// ✅ Good: Default export for main component
export default function App() {}

// ❌ Bad: Mixing styles inconsistently
export default function Component1() {}
export function Component2() {}
```

---

## Animation Guidelines

### Framer Motion Best Practices

```tsx
// ✅ Good: Reusable animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

<motion.div {...fadeInUp}>
  Content
</motion.div>

// ✅ Good: Viewport once for performance
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}  // Prevents re-animation
>

// ❌ Bad: Expensive animations
<motion.div
  animate={{ x: Math.random() * 100 }}  // Don't animate random values
  transition={{ duration: 10 }}          // Too slow
>
```

### CSS Animations

```css
/* ✅ Good: Use transform and opacity only */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* ❌ Bad: Animating layout properties */
@keyframes expand {
  from { width: 0; height: 0; }  /* Causes reflow */
  to { width: 100px; height: 100px; }
}
```

### Animation Performance

```tsx
// ✅ Good: GPU-accelerated properties
<motion.div
  animate={{ x: 100, y: 50, scale: 1.1, opacity: 0.8 }}
>

// ❌ Bad: Layout-triggering properties
<motion.div
  animate={{ width: 100, height: 50, marginLeft: 20 }}
>

// ✅ Good: Use will-change for heavy animations
<div className="animate-blob will-change-transform">
```

---

## Comments & Documentation

### Component Documentation

```tsx
/**
 * ServiceCard displays information about a single service offering
 * 
 * @param icon - Lucide React icon component
 * @param title - Service name
 * @param description - Service description
 * @param color - Color scheme identifier
 * @param gradient - Tailwind gradient classes
 */
export function ServiceCard({ icon, title, description, color, gradient }: ServiceCardProps) {
  // ...
}
```

### Inline Comments

```tsx
// ✅ Good: Explain "why", not "what"
// Delay animation to create stagger effect
transition={{ duration: 0.5, delay: index * 0.1 }}

// ❌ Bad: Obvious comment
// Set state to true
setIsOpen(true);

// ✅ Good: Clarify complex logic
// Close mobile menu when scrolling to prevent layout shift
setIsMenuOpen(false);
```

### TODO Comments

```tsx
// ✅ Good: Actionable TODO with context
// TODO: Add form validation for email format
// TODO: Implement error handling for API calls (JIRA-123)

// ❌ Bad: Vague TODO
// TODO: Fix this
// TODO: Improve
```

---

## Code Quality Checklist

### Before Committing

- [ ] All TypeScript types defined (no `any`)
- [ ] Component props properly typed
- [ ] Responsive classes applied (mobile-first)
- [ ] Animations use performant properties
- [ ] Event handlers properly typed
- [ ] Keys provided for mapped elements
- [ ] Accessibility attributes added (ARIA, alt text)
- [ ] Comments explain complex logic
- [ ] No console.log statements left
- [ ] Imports organized by category

### Performance

- [ ] Large components lazy loaded
- [ ] Images optimized and lazy loaded
- [ ] Animations use `viewport={{ once: true }}`
- [ ] No layout-triggering animations
- [ ] Heavy calculations memoized (useMemo)
- [ ] Event handlers memoized (useCallback)

### Accessibility

- [ ] Semantic HTML elements used
- [ ] ARIA labels for icon buttons
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Form inputs have associated labels

---

## Common Patterns

### Scroll to Section

```tsx
const scrollToSection = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

<button onClick={() => scrollToSection('contact')}>
  Contact Us
</button>
```

### Conditional Rendering

```tsx
// ✅ Good: Ternary for simple conditions
{isLoading ? <Spinner /> : <Content />}

// ✅ Good: && for single condition
{hasError && <ErrorMessage />}

// ✅ Good: Early return for complex conditions
if (!data) return <LoadingState />;
if (error) return <ErrorState error={error} />;
return <SuccessState data={data} />;
```

### Class Name Composition

```tsx
// ✅ Good: Using template literals
<div className={`
  base-class
  ${isActive ? 'active-class' : 'inactive-class'}
  ${variant === 'primary' ? 'bg-blue-600' : 'bg-gray-600'}
`}>

// ✅ Better: Using cn utility (if available)
import { cn } from './utils/cn';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  variant === 'primary' ? 'bg-blue-600' : 'bg-gray-600'
)}>
```

---

## ESLint + Prettier Configuration (Recommended)

### .eslintrc.json

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
```

### .prettierrc

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always"
}
```

---

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Remember:** Consistent code is maintainable code. Follow these guidelines to ensure the HOCX codebase remains clean, performant, and easy to understand.
