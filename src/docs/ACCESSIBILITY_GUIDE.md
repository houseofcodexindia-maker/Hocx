# HOCX Accessibility Guide

**Standard:** WCAG 2.1 Level AA  
**Framework:** React + TypeScript  
**Last Updated:** December 2024

---

## Table of Contents

1. [Accessibility Overview](#accessibility-overview)
2. [Semantic HTML](#semantic-html)
3. [Color Contrast](#color-contrast)
4. [Keyboard Navigation](#keyboard-navigation)
5. [Screen Reader Support](#screen-reader-support)
6. [ARIA Labels & Roles](#aria-labels--roles)
7. [Form Accessibility](#form-accessibility)
8. [Animation & Motion](#animation--motion)
9. [Testing Checklist](#testing-checklist)
10. [Common Issues & Fixes](#common-issues--fixes)

---

## Accessibility Overview

### Why Accessibility Matters

- **Legal Compliance:** Many countries require WCAG AA compliance
- **Wider Audience:** 15% of global population has some form of disability
- **Better UX:** Accessible design benefits all users
- **SEO Benefits:** Semantic HTML improves search rankings

### WCAG 2.1 Principles (POUR)

1. **Perceivable** – Information must be presentable to users
2. **Operable** – UI components must be operable by all users
3. **Understandable** – Information and UI must be understandable
4. **Robust** – Content must work with assistive technologies

---

## Semantic HTML

### Current Implementation

✅ **Good:**
```tsx
// Proper semantic structure
<header>...</header>
<nav>...</nav>
<main>
  <section id="home">...</section>
  <section id="services">...</section>
  <section id="pricing">...</section>
  <section id="contact">...</section>
</main>
<footer>...</footer>
```

### Best Practices

```tsx
// ✅ Good: Semantic elements
<header>
  <nav aria-label="Main navigation">
    <button>Menu</button>
  </nav>
</header>

<main>
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Our Services</h2>
  </section>
</main>

// ❌ Bad: Generic divs
<div class="header">
  <div class="nav">
    <div class="button">Menu</div>
  </div>
</div>
```

### Heading Hierarchy

```tsx
// ✅ Good: Logical heading order
<h1>Modern Software Solutions</h1>  {/* Only one h1 per page */}
  <section>
    <h2>Our Services</h2>
      <h3>Website Development</h3>
      <h3>App Development</h3>
  </section>
  <section>
    <h2>Pricing</h2>
      <h3>Basic Website</h3>
      <h3>Standard Website</h3>
  </section>

// ❌ Bad: Skipping levels
<h1>Title</h1>
<h3>Subtitle</h3>  {/* Skipped h2 */}
```

---

## Color Contrast

### WCAG AA Requirements

- **Normal Text:** 4.5:1 contrast ratio
- **Large Text (18px+):** 3:1 contrast ratio
- **UI Components:** 3:1 contrast ratio

### Current Color Combinations

#### ✅ Passing Combinations

| Foreground | Background | Ratio | Usage |
|------------|------------|-------|-------|
| Gray 900 (#111827) | White (#FFFFFF) | 16.1:1 | Body text |
| Gray 700 (#374151) | White (#FFFFFF) | 10.7:1 | Secondary text |
| Gray 600 (#4b5563) | White (#FFFFFF) | 7.5:1 | Tertiary text |
| White (#FFFFFF) | Blue 600 (#2563eb) | 6.3:1 | Button text |
| White (#FFFFFF) | Purple 600 (#9333ea) | 5.8:1 | Button text |

#### ⚠️ Potential Issues

```tsx
// ⚠️ Check: Light text on gradient backgrounds
<div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
  {/* Ensure contrast is maintained across entire gradient */}
</div>

// ⚠️ Check: Gray text on gray backgrounds
<div className="bg-gray-100 text-gray-400">
  {/* May not meet 4.5:1 ratio */}
</div>
```

### Testing Tools

1. **Browser DevTools:**
   - Chrome: Inspect > Accessibility panel
   - Firefox: Inspect > Accessibility tab

2. **Online Tools:**
   - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
   - [Contrast Ratio](https://contrast-ratio.com/)

3. **Extensions:**
   - aXe DevTools
   - WAVE Evaluation Tool

---

## Keyboard Navigation

### Tab Order

**Current Implementation:**

```tsx
// Header navigation (tab order: 1-6)
1. Home button
2. Services button
3. About button
4. Pricing button
5. Contact button
6. Get Started CTA

// Hero section (tab order: 7-8)
7. Get a Free Quote button
8. Explore Services button

// ... continues through page
```

### Focus Management

```tsx
// ✅ Good: Visible focus states
<button className="
  focus:outline-none 
  focus:ring-2 
  focus:ring-blue-500 
  focus:ring-offset-2
">
  Click Me
</button>

// ❌ Bad: Removing all focus styles
<button className="outline-none">Click Me</button>
```

### Focus Styles (Add to globals.css)

```css
/* Ensure all interactive elements have visible focus */
button:focus-visible,
a:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Remove focus for mouse users (optional) */
button:focus:not(:focus-visible) {
  outline: none;
}
```

### Keyboard Shortcuts

```tsx
// ✅ Good: Implement common shortcuts
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    // Escape to close mobile menu
    if (e.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false);
    }
    
    // Ctrl/Cmd + K for search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
  };
  
  window.addEventListener('keydown', handleKeyPress);
  return () => window.removeEventListener('keydown', handleKeyPress);
}, [isMenuOpen]);
```

### Skip Links (Recommended Addition)

```tsx
// Add to Header component
<a 
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-600 text-white px-4 py-2 z-50"
>
  Skip to main content
</a>

// Add id to main element
<main id="main-content">
  ...
</main>
```

---

## Screen Reader Support

### Current Status

✅ **Good Practices:**
- Semantic HTML structure
- Proper heading hierarchy
- Descriptive button text

⚠️ **Needs Improvement:**
- Add ARIA labels to icon-only buttons
- Add alt text if images are added
- Add live regions for dynamic content

### Screen Reader Testing

**Recommended Tools:**
- **macOS:** VoiceOver (Cmd + F5)
- **Windows:** NVDA (free) or JAWS (paid)
- **iOS:** VoiceOver (Settings > Accessibility)
- **Android:** TalkBack (Settings > Accessibility)

### Best Practices

```tsx
// ✅ Good: Descriptive button text
<button>Get a Free Quote</button>
<button>Explore Services</button>

// ❌ Bad: Generic text
<button>Click here</button>
<button>Learn more</button>

// ✅ Good: Icon buttons with ARIA labels
<button aria-label="Open navigation menu">
  <Menu size={24} />
</button>

<button aria-label="Close navigation menu">
  <X size={24} />
</button>

// ✅ Good: Hide decorative icons from screen readers
<div aria-hidden="true">
  <Sparkles className="decorative-icon" />
</div>
```

### Live Regions (Recommended)

```tsx
// Add to Contact form for submission feedback
<div 
  role="status" 
  aria-live="polite" 
  aria-atomic="true"
  className="sr-only"
>
  {submitMessage}
</div>

// Example usage
const [submitMessage, setSubmitMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitMessage('Sending message...');
  
  try {
    // Submit form
    setSubmitMessage('Message sent successfully!');
  } catch (error) {
    setSubmitMessage('Error sending message. Please try again.');
  }
};
```

---

## ARIA Labels & Roles

### Navigation

```tsx
// ✅ Recommended improvements
<header>
  <nav aria-label="Main navigation">
    <button 
      aria-label="Toggle navigation menu"
      aria-expanded={isMenuOpen}
      aria-controls="mobile-menu"
    >
      {isMenuOpen ? <X /> : <Menu />}
    </button>
    
    <div id="mobile-menu" aria-hidden={!isMenuOpen}>
      {/* Menu items */}
    </div>
  </nav>
</header>
```

### Sections

```tsx
// ✅ Good: Link sections to headings
<section aria-labelledby="services-heading">
  <h2 id="services-heading">Our Services</h2>
  {/* Section content */}
</section>

// Alternative: Use aria-label if no visible heading
<section aria-label="Contact information">
  {/* Content without a heading */}
</section>
```

### Interactive Elements

```tsx
// ✅ Good: ARIA for custom components
<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyPress={(e) => e.key === 'Enter' && handleClick()}
  aria-pressed={isPressed}
>
  Custom Button
</div>

// ❌ Better: Use actual button
<button onClick={handleClick}>
  Custom Button
</button>
```

### ARIA Attributes Reference

| Attribute | Usage | Example |
|-----------|-------|---------|
| `aria-label` | Accessible name | `<button aria-label="Close">×</button>` |
| `aria-labelledby` | Reference to label | `<section aria-labelledby="heading-id">` |
| `aria-describedby` | Additional description | `<input aria-describedby="error-msg">` |
| `aria-expanded` | Expandable UI state | `<button aria-expanded={isOpen}>` |
| `aria-hidden` | Hide from screen readers | `<div aria-hidden="true">` |
| `aria-live` | Dynamic content updates | `<div aria-live="polite">` |
| `aria-current` | Current item in set | `<a aria-current="page">` |

---

## Form Accessibility

### Contact Form Improvements

```tsx
// ✅ Recommended: Proper labels and error handling
export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name field */}
      <div>
        <label htmlFor="name" className="block mb-2 font-semibold">
          Name <span className="text-red-600" aria-label="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full px-4 py-3 rounded-xl border-2"
        />
        {errors.name && (
          <p id="name-error" className="text-red-600 text-sm mt-1" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email <span className="text-red-600" aria-label="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          autoComplete="email"
          className="w-full px-4 py-3 rounded-xl border-2"
        />
        {errors.email && (
          <p id="email-error" className="text-red-600 text-sm mt-1" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button 
        type="submit"
        aria-busy={isSubmitting}
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      
      {/* Status message */}
      {submitMessage && (
        <div role="status" aria-live="polite" className="mt-4">
          {submitMessage}
        </div>
      )}
    </form>
  );
}
```

### Form Best Practices

1. **Always use `<label>` elements**
2. **Associate labels with inputs** (for/id or wrapping)
3. **Provide error messages** with `aria-describedby`
4. **Mark required fields** with `required` and `aria-required`
5. **Use proper input types** (email, tel, url)
6. **Add autocomplete attributes** for user data
7. **Provide submit feedback** with `aria-live` regions

---

## Animation & Motion

### Reduced Motion Support

```tsx
// ✅ Good: Respect user preferences
import { motion, useReducedMotion } from 'framer-motion';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      Content
    </motion.div>
  );
}
```

### CSS Approach

```css
/* Add to globals.css */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animate-blob,
  .animate-gradient {
    animation: none !important;
  }
}
```

### Auto-Playing Content

```tsx
// ✅ Good: Provide pause/play controls
<video autoPlay muted loop>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" />
</video>
<button aria-label="Pause video">
  <Pause />
</button>
```

---

## Testing Checklist

### Automated Testing

- [ ] **Lighthouse Accessibility Audit** (Score 90+)
- [ ] **aXe DevTools** (0 violations)
- [ ] **WAVE** (0 errors)
- [ ] **Pa11y** (command-line tool)

### Manual Testing

#### Keyboard Navigation
- [ ] Tab through entire page in logical order
- [ ] Shift+Tab works in reverse
- [ ] Enter/Space activates buttons and links
- [ ] Escape closes modals/menus
- [ ] Arrow keys work in menus (if applicable)
- [ ] Focus is visible on all interactive elements
- [ ] No keyboard traps

#### Screen Reader
- [ ] Turn on VoiceOver/NVDA
- [ ] Navigate with screen reader controls
- [ ] All content is announced
- [ ] Headings create proper outline
- [ ] Links have descriptive text
- [ ] Form fields have labels
- [ ] Error messages are announced
- [ ] Dynamic content updates are announced

#### Visual
- [ ] Zoom to 200% (text remains readable)
- [ ] High contrast mode works
- [ ] Color is not the only indicator
- [ ] Text spacing can be adjusted
- [ ] No horizontal scrolling at 320px width

#### Color Contrast
- [ ] All text meets 4.5:1 ratio (or 3:1 for large text)
- [ ] UI components meet 3:1 ratio
- [ ] Focus indicators meet 3:1 ratio
- [ ] Test with color blindness simulators

---

## Common Issues & Fixes

### Issue 1: Icon-Only Buttons

```tsx
// ❌ Problem: No accessible name
<button onClick={toggleMenu}>
  <Menu size={24} />
</button>

// ✅ Solution: Add aria-label
<button onClick={toggleMenu} aria-label="Open navigation menu">
  <Menu size={24} />
</button>

// ✅ Alternative: Visually hidden text
<button onClick={toggleMenu}>
  <Menu size={24} />
  <span className="sr-only">Open navigation menu</span>
</button>
```

### Issue 2: Low Color Contrast

```tsx
// ❌ Problem: Insufficient contrast
<p className="text-gray-400">
  This text might not meet WCAG AA
</p>

// ✅ Solution: Use darker color
<p className="text-gray-600">
  This text meets WCAG AA standards
</p>
```

### Issue 3: Missing Form Labels

```tsx
// ❌ Problem: Input without label
<input placeholder="Your name" />

// ✅ Solution: Add proper label
<label htmlFor="name">Name</label>
<input id="name" placeholder="Your name" />

// ✅ Alternative: aria-label (less preferred)
<input aria-label="Name" placeholder="Your name" />
```

### Issue 4: Non-Semantic Buttons

```tsx
// ❌ Problem: Div used as button
<div onClick={handleClick}>Click me</div>

// ✅ Solution: Use button element
<button onClick={handleClick}>Click me</button>

// ✅ If div is necessary: Add ARIA
<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyPress={(e) => e.key === 'Enter' && handleClick()}
>
  Click me
</div>
```

### Issue 5: Missing Alt Text

```tsx
// ❌ Problem: Image without alt text
<img src="logo.png" />

// ✅ Solution: Add descriptive alt
<img src="logo.png" alt="HOCX company logo" />

// ✅ Decorative images: Empty alt
<img src="decoration.png" alt="" />
```

---

## Resources

### Testing Tools

- [Lighthouse](https://developers.google.com/web/tools/lighthouse) – Built into Chrome DevTools
- [aXe DevTools](https://www.deque.com/axe/devtools/) – Browser extension
- [WAVE](https://wave.webaim.org/) – Web accessibility evaluation tool
- [Pa11y](https://pa11y.org/) – Automated testing
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) – Color contrast

### Guidelines & Documentation

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [A11y Project](https://www.a11yproject.com/)
- [WebAIM](https://webaim.org/)

### Screen Readers

- [VoiceOver (macOS/iOS)](https://www.apple.com/accessibility/voiceover/) – Built-in
- [NVDA (Windows)](https://www.nvaccess.org/) – Free
- [JAWS (Windows)](https://www.freedomscientific.com/products/software/jaws/) – Paid
- [TalkBack (Android)](https://support.google.com/accessibility/android/answer/6283677) – Built-in

---

## Implementation Priority

### High Priority (Must Fix)

1. Add ARIA labels to icon-only buttons (Menu, X)
2. Ensure all form inputs have associated labels
3. Add focus styles to all interactive elements
4. Fix any color contrast issues
5. Add keyboard event handlers where missing

### Medium Priority (Should Fix)

1. Add skip navigation link
2. Implement reduced motion support
3. Add live regions for dynamic content
4. Improve heading hierarchy if needed
5. Add form validation with accessible error messages

### Low Priority (Nice to Have)

1. Add keyboard shortcuts
2. Implement focus trap for mobile menu
3. Add progress indicators for multi-step processes
4. Enhance ARIA landmarks
5. Add tooltips with proper ARIA

---

## Final Recommendations

1. **Run automated tests regularly** (Lighthouse, aXe)
2. **Test with real screen readers** at least monthly
3. **Include accessibility in code reviews**
4. **Document accessibility features** in component library
5. **Train team on WCAG guidelines**
6. **Involve users with disabilities** in testing when possible

---

**Remember:** Accessibility is not a one-time checklist. It's an ongoing commitment to inclusive design.
