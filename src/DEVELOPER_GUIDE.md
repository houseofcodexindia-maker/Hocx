# 👋 Welcome to HOCX - Developer Guide

**Premium modern tech company website built with React + TypeScript + Tailwind CSS**

---

## 🚀 Quick Start (5 Minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# http://localhost:5173

# 4. Start coding!
```

---

## 📚 Complete Documentation

**All documentation is in the `/docs` folder:**

### 🌟 Start Here (New Developers)
→ **[/docs/START_HERE.md](/docs/START_HERE.md)** – 10-minute quickstart guide

### 📖 Full Documentation Index
→ **[/docs/INDEX.md](/docs/INDEX.md)** – Visual guide to all docs  
→ **[/docs/README.md](/docs/README.md)** – Documentation overview

---

## 📑 Essential Documentation

| Document | What's Inside | When to Use |
|----------|---------------|-------------|
| **[START_HERE.md](/docs/START_HERE.md)** | Quickstart, first tasks | Day 1 onboarding |
| **[DESIGN_SYSTEM.md](/docs/DESIGN_SYSTEM.md)** | Colors, typography, spacing | Daily design decisions |
| **[COMPONENT_LIBRARY.md](/docs/COMPONENT_LIBRARY.md)** | All components documented | Building features |
| **[CODE_STYLE_GUIDE.md](/docs/CODE_STYLE_GUIDE.md)** | Coding standards | Before writing code |
| **[QUICK_REFERENCE.md](/docs/QUICK_REFERENCE.md)** | Code snippets, patterns | Daily development |
| **[ACCESSIBILITY_GUIDE.md](/docs/ACCESSIBILITY_GUIDE.md)** | WCAG compliance | Testing & QA |
| **[PERFORMANCE_OPTIMIZATION.md](/docs/PERFORMANCE_OPTIMIZATION.md)** | Performance tips | Optimization |
| **[DEVELOPER_HANDOFF.md](/docs/DEVELOPER_HANDOFF.md)** | Project overview | Understanding project |
| **[ASSET_CATALOG.md](/docs/ASSET_CATALOG.md)** | Design assets, exports | Design handoff |

---

## 🎨 Design System Quick Reference

### Brand Colors
```tsx
// Primary gradient (most common)
className="bg-gradient-to-r from-blue-600 to-purple-600"

// Gradient text
className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
```

### Typography
```tsx
// Hero heading (responsive)
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"

// Section heading
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900"

// Body text
className="text-base sm:text-lg text-gray-600"
```

### Spacing
```tsx
// Section padding
className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"

// Container
className="container mx-auto max-w-6xl"
```

---

## 🧩 Common Patterns

### Create a New Section

```tsx
import { motion } from 'framer-motion';

export function NewSection() {
  return (
    <section 
      id="section-name" 
      className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Section Title
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Description
          </p>
        </motion.div>
        
        {/* Content */}
      </div>
    </section>
  );
}
```

### Create a Card

```tsx
<motion.div
  whileHover={{ y: -4 }}
  className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-gray-100 hover:shadow-2xl transition-all"
>
  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
    <Icon size={28} />
  </div>
  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
    Card Title
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Card description
  </p>
</motion.div>
```

### Create a Button

```tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl hover:shadow-2xl transition-all font-semibold inline-flex items-center gap-2"
>
  <span>Button Text</span>
  <ArrowRight size={18} />
</motion.button>
```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.x | UI framework |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.0 | Styling |
| **Framer Motion** | Latest | Animations |
| **Lucide React** | Latest | Icons |
| **Vite** | Latest | Build tool |

---

## 📂 Project Structure

```
/
├── /components/              # React components
│   ├── Header.tsx           # Sticky navigation
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services grid (7 cards)
│   ├── Pricing.tsx          # Pricing tiers (3 plans)
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Site footer
│   └── /ui/                 # 40+ shadcn components
│
├── /styles/
│   └── globals.css          # Custom animations, typography
│
├── /docs/                   # 📚 FULL DOCUMENTATION
│   ├── START_HERE.md        # ⭐ Start here!
│   ├── INDEX.md             # Visual documentation guide
│   ├── README.md            # Documentation overview
│   ├── DESIGN_SYSTEM.md     # Design tokens
│   ├── COMPONENT_LIBRARY.md # Component docs
│   ├── CODE_STYLE_GUIDE.md  # Coding standards
│   ├── QUICK_REFERENCE.md   # Cheat sheet
│   ├── ACCESSIBILITY_GUIDE.md
│   ├── PERFORMANCE_OPTIMIZATION.md
│   ├── DEVELOPER_HANDOFF.md
│   └── ASSET_CATALOG.md
│
└── App.tsx                  # Main app component
```

---

## ✅ Pre-Deployment Checklist

- [ ] Code follows [CODE_STYLE_GUIDE.md](/docs/CODE_STYLE_GUIDE.md)
- [ ] Uses design tokens from [DESIGN_SYSTEM.md](/docs/DESIGN_SYSTEM.md)
- [ ] Passes accessibility checks (WCAG AA)
- [ ] Lighthouse score > 90
- [ ] All TypeScript errors resolved
- [ ] Tested on mobile, tablet, desktop
- [ ] Browser compatibility verified

---

## 🎯 Quick Links

### Design Tokens
- [Color Palette](/docs/DESIGN_SYSTEM.md#color-system)
- [Typography Scale](/docs/DESIGN_SYSTEM.md#typography)
- [Spacing System](/docs/DESIGN_SYSTEM.md#spacing-system)
- [Animations](/docs/DESIGN_SYSTEM.md#animations--motion)

### Components
- [Header Component](/docs/COMPONENT_LIBRARY.md#1-header-component)
- [Hero Component](/docs/COMPONENT_LIBRARY.md#2-hero-component)
- [Services Component](/docs/COMPONENT_LIBRARY.md#3-services-component)
- [Pricing Component](/docs/COMPONENT_LIBRARY.md#4-pricing-component)
- [Contact Component](/docs/COMPONENT_LIBRARY.md#5-contact-component)

### Code Guidelines
- [TypeScript Guidelines](/docs/CODE_STYLE_GUIDE.md#typescript-guidelines)
- [React Best Practices](/docs/CODE_STYLE_GUIDE.md#react-best-practices)
- [Tailwind Conventions](/docs/CODE_STYLE_GUIDE.md#tailwind-css-conventions)
- [Animation Guidelines](/docs/CODE_STYLE_GUIDE.md#animation-guidelines)

---

## 🐛 Common Issues

### Animations not working
```tsx
// ✅ Make sure to import Framer Motion
import { motion } from 'framer-motion';

// ✅ Use <motion.div> not <div>
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
```

### Gradient text not showing
```tsx
// ✅ Need all three classes
className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
```

### Mobile styles not applying
```tsx
// ✅ Use responsive modifiers
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
// Not: className="text-7xl"
```

---

## 📞 Need Help?

### Quick Answers
1. **Design tokens?** → [DESIGN_SYSTEM.md](/docs/DESIGN_SYSTEM.md)
2. **Component props?** → [COMPONENT_LIBRARY.md](/docs/COMPONENT_LIBRARY.md)
3. **Code style?** → [CODE_STYLE_GUIDE.md](/docs/CODE_STYLE_GUIDE.md)
4. **Code snippet?** → [QUICK_REFERENCE.md](/docs/QUICK_REFERENCE.md)
5. **Full index?** → [INDEX.md](/docs/INDEX.md)

### External Resources
- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

## 🎓 Learning Path

### Day 1: Foundation (2-3 hours)
1. Read [START_HERE.md](/docs/START_HERE.md) – 10 min
2. Read [DEVELOPER_HANDOFF.md](/docs/DEVELOPER_HANDOFF.md) – 20 min
3. Read [DESIGN_SYSTEM.md](/docs/DESIGN_SYSTEM.md) – 20 min
4. Run the project, make small changes – 90 min

### Day 2: Development (3-4 hours)
1. Read [COMPONENT_LIBRARY.md](/docs/COMPONENT_LIBRARY.md) – 30 min
2. Read [CODE_STYLE_GUIDE.md](/docs/CODE_STYLE_GUIDE.md) – 15 min
3. Bookmark [QUICK_REFERENCE.md](/docs/QUICK_REFERENCE.md) – 5 min
4. Build a test component – 120 min

### Day 3: Quality (2-3 hours)
1. Read [ACCESSIBILITY_GUIDE.md](/docs/ACCESSIBILITY_GUIDE.md) – 20 min
2. Read [PERFORMANCE_OPTIMIZATION.md](/docs/PERFORMANCE_OPTIMIZATION.md) – 15 min
3. Audit existing code – 90 min

---

## 📊 Project Stats

| Metric | Value |
|--------|-------|
| **Components** | 8 main + 40+ UI |
| **Bundle Size** | ~150KB gzipped |
| **Lighthouse Score** | 95+ |
| **TypeScript Coverage** | 100% |
| **Load Time** | < 2 seconds |
| **Documentation** | 9 comprehensive docs |

---

## 🎉 You're Ready!

**Next Steps:**

1. ✅ Run `npm install` and `npm run dev`
2. ✅ Read [START_HERE.md](/docs/START_HERE.md)
3. ✅ Explore the code in `/components`
4. ✅ Make your first change
5. ✅ Build something awesome!

---

**Documentation Package Version:** 1.0  
**Created:** December 2024  
**Project:** HOCX Website  
**Framework:** React 18 + TypeScript + Tailwind CSS v4.0

**Questions?** Start with [/docs/INDEX.md](/docs/INDEX.md) for a complete guide to all documentation.

**Happy coding! 🚀**
