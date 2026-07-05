# Walkthrough - Premium Redesign of Alpine Nest Homestay Website

We have completely redesigned the website for **Alpine Nest Homestay** based on your reference design specifications: futuristic glassmorphism, floating 3D tilt cards, bold typography, ivory and deep forest black contrast, and neon green accents. 

All brown elements have been removed, replaced with a world-class ₹15 Lakh hospitality brand experience.

---

## Architectural & Design Changes

### 1. Unified Design Language
- **[design.md](file:///c:/Users/chitr/Downloads/my%20websites/alpine%20nest%20homestay/design.md)**: Updated as the single source of truth containing color codes, border radiuses, typography scaling, and flyer layout behaviors.
- **Brand Colors**:
  - Backgrounds: `#F8F7F2` (Premium Ivory) & `#FFFFFF` (White).
  - Dark Wrappers: `#0E1512` & `#111A15` (Deep Forest Black).
  - Highlights: `#A8FF1E` (Neon Lime) & `#5D7A55` (Secondary Forest Green).
  - Glass: `rgba(255, 255, 255, 0.45)` with `backdrop-filter: blur(28px)`.
- **Large Rounded System**: Applied `36px` to cards, `32px` to room images, `999px` to button pillars and navbar.

### 2. High-Impact Components & Pages
- **[index.html](file:///c:/Users/chitr/Downloads/my%20websites/alpine%20nest%20homestay/index.html)**:
  - **Floating Glass Pill Navbar**: Centered capsule shape with frosted glass backing, responsive hamburger toggler, and Book Now action button.
  - **Flyer-Composition Hero**: 
    - Giant bold headline: `80px` desktop / `42px` mobile with `-2px` letter-spacing.
    - Large glass folder card in front showing Skyline Suite, flanked by offset overlapping room cards (`photos/capsule1.jpg` and `photos/2bhk1.jpg`) rotated slightly.
    - Scattered badge pills floating in 3D space with subtle animations.
    - Curved SVG divider at the bottom seamlessly flowing into the dark wrapper.
  - **Immersive Dark Theme Section**: 
    - Encloses About Us and the Why Choose Us Bento Grid.
    - Bento Cards span asymmetric grid layouts with soft neon outlines (`rgba(168, 255, 30, 0.15)`) and hover neon glow drops.
    - Curved SVG bottom divider transitioning back to light ivory.
  - **Sanctuary Rooms Collection**:
    - Generates full layout showcase cards containing CSS carousels for the Skyline, Cozy, and Capsule suites (navigated via click arrows and active dots).
    - Integrated booking actions: Book Now, Call Now, and WhatsApp compilation.
  - **Image Gallery**:
    - Pinterest-style masonry displaying all 20 room images, filterable by room type, and linked to a custom glass lightbox.
  - **Interactive Map, Reviews, House Rules, & Contacts**:
    - Integrated all brand rules, locations, and direct contact panes with neon/forest green details.
- **[index.css](file:///c:/Users/chitr/Downloads/my%20websites/alpine%20nest%20homestay/index.css)**:
  - Fully implements the customized color palette, keyframe animations, 3D card perspective tilt, and fluid mobile scaling.
- **[main.js](file:///c:/Users/chitr/Downloads/my%20websites/alpine%20nest%20homestay/main.js)**:
  - Updates carousel indices, mobile navbar scroll thresholds, folder mouse-movement tilt angles, and footer links.
  - Formats inquiries into formatted WhatsApp text templates.

---

## Verification & Testing
- **Visuals Check**: Load [index.html](file:///c:/Users/chitr/Downloads/my%20websites/alpine%20nest%20homestay/index.html) in any browser. Enjoy the capsule navbar, overlapping hero layers, glowing dark bentos, room sliders, and responsive masonry layouts.
- **Mobile Check**: Shrinking the screen updates the layout smoothly—all components scale proportionally without clutter or horizontal scrollbars.
