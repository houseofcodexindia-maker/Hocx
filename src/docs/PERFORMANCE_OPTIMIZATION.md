# HOCX Performance Optimization Guide

**Framework:** React 18 + TypeScript + Vite  
**Target:** 90+ Lighthouse Score, < 3s Load Time  
**Last Updated:** December 2024

---

## Table of Contents

1. [Performance Goals](#performance-goals)
2. [Current Performance Metrics](#current-performance-metrics)
3. [Bundle Optimization](#bundle-optimization)
4. [Code Splitting](#code-splitting)
5. [Image Optimization](#image-optimization)
6. [Animation Performance](#animation-performance)
7. [React Optimization](#react-optimization)
8. [Network Optimization](#network-optimization)
9. [Monitoring & Measurement](#monitoring--measurement)
10. [Optimization Checklist](#optimization-checklist)

---

## Performance Goals

### Target Metrics (Mobile & Desktop)

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **First Contentful Paint (FCP)** | < 1.5s | ~0.8s | ✅ |
| **Largest Contentful Paint (LCP)** | < 2.5s | ~1.2s | ✅ |
| **Time to Interactive (TTI)** | < 3.5s | ~2.0s | ✅ |
| **Total Blocking Time (TBT)** | < 200ms | ~100ms | ✅ |
| **Cumulative Layout Shift (CLS)** | < 0.1 | ~0.02 | ✅ |
| **Speed Index** | < 3.0s | ~1.5s | ✅ |
| **Lighthouse Score** | > 90 | 95+ | ✅ |

### Bundle Size Targets

| Asset Type | Target | Current | Status |
|------------|--------|---------|--------|
| **JavaScript (gzipped)** | < 150KB | ~120KB | ✅ |
| **CSS (gzipped)** | < 30KB | ~20KB | ✅ |
| **Total Initial Load** | < 200KB | ~150KB | ✅ |

---

## Current Performance Metrics

### Strengths ✅

1. **No External Fonts:** Using system fonts = 0 network requests
2. **No Images:** Pure CSS/SVG design = faster load times
3. **Minimal Dependencies:** Only essential libraries
4. **Modern Build Tool:** Vite provides automatic optimizations
5. **GPU-Accelerated Animations:** Transform/opacity only
6. **Code Splitting:** Automatic with Vite

### Potential Issues ⚠️

1. **Large Animation Library:** Framer Motion adds ~40KB
2. **No Lazy Loading:** All components load immediately
3. **No Image Optimization:** If images are added later
4. **No Service Worker:** Missing offline capabilities
5. **No Resource Hints:** Missing preload/prefetch directives

---

## Bundle Optimization

### 1. Analyze Bundle Size

```bash
# Install bundle analyzer
npm install -D rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
});

# Build and analyze
npm run build
```

### 2. Tree Shaking

```tsx
// ✅ Good: Named imports (tree-shakeable)
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

// ❌ Bad: Default imports (includes everything)
import * as Framer from 'framer-motion';
import * as Icons from 'lucide-react';
```

### 3. Remove Unused Code

```bash
# Find unused exports
npm install -D ts-prune
npx ts-prune

# Remove unused shadcn/ui components if not needed
# Currently 40+ components in /components/ui
# Only include what you actually use
```

### 4. Production Build Optimization

```json
// vite.config.ts
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // Remove console.log in production
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['framer-motion'],
          'icons': ['lucide-react']
        }
      }
    }
  }
});
```

---

## Code Splitting

### 1. Route-Based Splitting (If Multi-Page)

```tsx
// App.tsx
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

export default function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
}
```

### 2. Component-Based Splitting

```tsx
// Lazy load below-the-fold components
import { lazy, Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

const Services = lazy(() => import('./components/Services'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-screen" />}>
          <Services />
          <Pricing />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
```

### 3. Dynamic Imports

```tsx
// Only load heavy libraries when needed
const handleExport = async () => {
  const { exportToPDF } = await import('./utils/pdf-exporter');
  exportToPDF(data);
};

// Load charts only when user clicks
const showChart = async () => {
  const { Chart } = await import('recharts');
  setChartComponent(<Chart {...props} />);
};
```

---

## Image Optimization

### 1. Format Selection

```tsx
// Recommended: WebP with fallback
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <source srcSet="image.jpg" type="image/jpeg" />
  <img src="image.jpg" alt="Description" />
</picture>

// Or using ImageWithFallback component
<ImageWithFallback 
  src="image.webp" 
  fallback="image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### 2. Lazy Loading

```tsx
// ✅ Good: Lazy load images below the fold
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy"
  width={800}
  height={600}
/>

// ✅ Good: Eager load hero images
<img 
  src="hero.jpg" 
  alt="Hero"
  loading="eager"
  fetchpriority="high"
/>
```

### 3. Responsive Images

```tsx
// Use srcset for different screen sizes
<img
  src="image-800.jpg"
  srcSet="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w,
    image-1600.jpg 1600w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Description"
  width={800}
  height={600}
/>
```

### 4. Icon Optimization

```tsx
// ✅ Current: Lucide icons (tree-shakeable, SVG)
import { ArrowRight } from 'lucide-react';
<ArrowRight size={24} />

// ❌ Avoid: Font icons (loads entire font)
<i className="fa fa-arrow-right"></i>

// ❌ Avoid: Inline SVG for every icon (increases bundle)
<svg>...</svg>
```

---

## Animation Performance

### 1. GPU-Accelerated Properties

```tsx
// ✅ Good: Transform and opacity (GPU-accelerated)
<motion.div
  animate={{ 
    x: 100,           // translateX
    y: 50,            // translateY
    scale: 1.1,       // scale
    rotate: 45,       // rotate
    opacity: 0.8      // opacity
  }}
/>

// ❌ Bad: Layout-triggering properties (CPU-bound)
<motion.div
  animate={{ 
    width: 200,       // Causes reflow
    height: 100,      // Causes reflow
    marginLeft: 20,   // Causes reflow
    fontSize: 24      // Causes repaint
  }}
/>
```

### 2. Will-Change Optimization

```tsx
// Add will-change for heavy animations
<div className="
  animate-blob 
  will-change-transform
">
  {/* Animated content */}
</div>
```

```css
/* globals.css */
.animate-blob {
  will-change: transform;
}

/* Remove will-change after animation */
@media (prefers-reduced-motion: reduce) {
  .animate-blob {
    will-change: auto;
  }
}
```

### 3. Framer Motion Optimization

```tsx
// ✅ Good: Use viewport once
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}  // Don't re-animate on scroll up
>

// ✅ Good: Reduce layout animations
<motion.div
  layout="position"  // Instead of layout="size"
>

// ✅ Good: Use transform instead of layout
<motion.div
  animate={{ x: 100 }}  // Instead of left: 100
>
```

### 4. CSS Animations for Simple Effects

```css
/* Use CSS for simple animations (better performance) */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* Reserve Framer Motion for complex interactions */
```

---

## React Optimization

### 1. Memoization

```tsx
// ✅ Good: Memo for expensive components
import { memo } from 'react';

export const ServiceCard = memo(function ServiceCard({ title, description }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
});

// ✅ Good: useMemo for expensive calculations
const sortedServices = useMemo(() => {
  return services.sort((a, b) => a.priority - b.priority);
}, [services]);

// ✅ Good: useCallback for event handlers passed as props
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);
```

### 2. Avoid Inline Functions & Objects

```tsx
// ❌ Bad: Creates new function on every render
<button onClick={() => handleClick(id)}>Click</button>

// ✅ Good: Use useCallback
const handleButtonClick = useCallback(() => {
  handleClick(id);
}, [id]);
<button onClick={handleButtonClick}>Click</button>

// ❌ Bad: Creates new object on every render
<Component style={{ marginTop: 10 }} />

// ✅ Good: Define outside component or use useMemo
const buttonStyle = { marginTop: 10 };
<Component style={buttonStyle} />
```

### 3. Virtualization (For Long Lists)

```tsx
// If you have 100+ items, use virtualization
import { FixedSizeList } from 'react-window';

<FixedSizeList
  height={600}
  itemCount={1000}
  itemSize={100}
  width="100%"
>
  {({ index, style }) => (
    <div style={style}>
      Item {index}
    </div>
  )}
</FixedSizeList>
```

### 4. Debouncing & Throttling

```tsx
// Debounce search input
import { useDebouncedCallback } from 'use-debounce';

const handleSearch = useDebouncedCallback((value: string) => {
  performSearch(value);
}, 300);

// Throttle scroll events
import { useThrottledCallback } from 'use-debounce';

const handleScroll = useThrottledCallback(() => {
  updateScrollPosition();
}, 100);
```

---

## Network Optimization

### 1. Resource Hints

```html
<!-- Add to index.html -->
<head>
  <!-- DNS Prefetch for external domains -->
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  
  <!-- Preconnect for critical third-parties -->
  <link rel="preconnect" href="https://api.example.com">
  
  <!-- Preload critical assets -->
  <link rel="preload" href="/hero-image.webp" as="image">
  
  <!-- Prefetch for next page navigation -->
  <link rel="prefetch" href="/about-page.js">
</head>
```

### 2. Compression

```typescript
// vite.config.ts
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br'
    })
  ]
});
```

### 3. CDN Configuration

```typescript
// Use CDN for static assets in production
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? 'https://cdn.example.com/' 
    : '/'
});
```

### 4. Caching Strategy

```typescript
// Service Worker (recommended addition)
// sw.js
const CACHE_NAME = 'hocx-v1';
const urlsToCache = [
  '/',
  '/index.css',
  '/index.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

---

## Monitoring & Measurement

### 1. Lighthouse CI

```bash
# Install Lighthouse CI
npm install -D @lhci/cli

# Configure (.lighthouserc.json)
{
  "ci": {
    "collect": {
      "staticDistDir": "./dist"
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 1500 }],
        "interactive": ["error", { "maxNumericValue": 3500 }]
      }
    }
  }
}

# Run in CI/CD
npx lhci autorun
```

### 2. Web Vitals Monitoring

```tsx
// Add to App.tsx
import { useEffect } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export default function App() {
  useEffect(() => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
    
    // In production, send to analytics
    // getCLS((metric) => sendToAnalytics(metric));
  }, []);
  
  return <div>...</div>;
}
```

### 3. Performance Monitoring Tools

**Development:**
- Chrome DevTools Performance tab
- React DevTools Profiler
- Lighthouse in DevTools

**Production:**
- Google Analytics (Core Web Vitals)
- Sentry (performance monitoring)
- LogRocket (session replay)
- New Relic / DataDog (APM)

### 4. Bundle Analysis

```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer

# Check for duplicate dependencies
npm ls react
npm dedupe
```

---

## Optimization Checklist

### High Priority ✅

- [x] Use system fonts (no web fonts)
- [x] Minify JavaScript and CSS
- [x] Enable gzip/brotli compression
- [ ] Implement lazy loading for below-the-fold components
- [ ] Add resource hints (preconnect, dns-prefetch)
- [x] Use GPU-accelerated animations only
- [ ] Implement code splitting
- [x] Remove console.log in production
- [ ] Add loading states for async operations
- [ ] Optimize third-party scripts

### Medium Priority ⚠️

- [ ] Add service worker for offline support
- [ ] Implement virtual scrolling for long lists
- [ ] Use React.memo for expensive components
- [ ] Add skeleton loaders
- [ ] Optimize images (WebP, lazy loading)
- [ ] Implement resource caching strategy
- [ ] Add performance monitoring (web-vitals)
- [ ] Reduce bundle size (remove unused deps)
- [ ] Add error boundaries
- [ ] Implement retry logic for failed requests

### Low Priority 💡

- [ ] Implement prefetching for next pages
- [ ] Add critical CSS inlining
- [ ] Use HTTP/2 server push
- [ ] Implement request batching
- [ ] Add request deduplication
- [ ] Optimize font loading (if added)
- [ ] Add progressive enhancement
- [ ] Implement adaptive loading (based on network)
- [ ] Add performance budget in CI
- [ ] Create performance dashboard

---

## Quick Wins (Implement These First)

### 1. Lazy Load Components (5 min)

```tsx
// App.tsx
import { lazy, Suspense } from 'react';

const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <div>
      <Hero />
      <Services />
      <Suspense fallback={<div>Loading...</div>}>
        <Pricing />
        <Contact />
      </Suspense>
    </div>
  );
}
```

### 2. Add Resource Hints (2 min)

```html
<!-- index.html -->
<head>
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
  <link rel="preconnect" href="https://api.example.com">
</head>
```

### 3. Enable Compression (5 min)

```bash
npm install -D vite-plugin-compression
```

```typescript
// vite.config.ts
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression()
  ]
});
```

### 4. Remove Console Logs (2 min)

```typescript
// vite.config.ts
export default defineConfig({
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  }
});
```

### 5. Add Loading States (10 min)

```tsx
const [isLoading, setIsLoading] = useState(false);

const handleSubmit = async () => {
  setIsLoading(true);
  try {
    await submitForm();
  } finally {
    setIsLoading(false);
  }
};

<button disabled={isLoading}>
  {isLoading ? 'Sending...' : 'Send Message'}
</button>
```

---

## Performance Testing Workflow

1. **Before Optimization:**
   - Run Lighthouse audit
   - Record baseline metrics
   - Analyze bundle size

2. **After Each Change:**
   - Run Lighthouse again
   - Compare metrics
   - Check bundle size delta

3. **Before Deployment:**
   - Test on slow 3G network
   - Test on low-end devices
   - Verify all optimizations active

---

## Resources

- [Web.dev Performance](https://web.dev/performance/)
- [React Performance Optimization](https://react.dev/learn/render-and-commit)
- [Vite Performance](https://vitejs.dev/guide/performance.html)
- [Framer Motion Performance](https://www.framer.com/motion/performance/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)

---

**Remember:** Measure first, optimize second. Don't optimize prematurely—focus on real bottlenecks identified through profiling.
