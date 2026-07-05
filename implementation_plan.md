# Implementation Plan - Alpine Nest Homestay Website

Create the most premium, luxury homestay website in Dibrugarh, Assam, combining design cues from Apple, Airbnb Luxe, and Glassmorphism.

## Proposed Changes

We will create a clean, responsive single-page web application featuring high-end typography, glassmorphic cards, smooth micro-animations, and full booking inquiry functionality.

### Core Assets & Pages

#### [NEW] [index.html](file:///c:/Users/chitr/Downloads/my%20websites/alpine%20nest%20homestay/index.html)
The primary entry point. Contains:
- **SEO & Metadata**: High-impact titles, descriptions, open graph tags, responsive viewports.
- **Sticky Glassmorphic Navbar**: Premium blur, custom logo, navigation links, and "Book Now" CTA.
- **Hero Section**: Large premium headline, floating review badges, Google ratings, layered images, and floating capsule badges.
- **Interactive Rooms Showcase**: Highlighting 1BHK, 2BHK, and Capsule Theme Bedroom using a premium tab/slider system.
- **Pinterest-Style Gallery**: Puzzle layout of alpine/homestay aesthetics with a custom JavaScript lightbox.
- **Interactive Amenities Grid**: Glass cards with micro-animations and custom SVG icons.
- **Interactive Map & Location Section**: Embedded Google Maps layout with tabs for nearby attractions (Airport, Railway Station, AMC, Restaurants).
- **Reviews Section**: Testimonials in a smooth horizontal scrollable track.
- **Interactive Booking Engine**: Custom booking modal with guest count, date selection, room selection, and "Send Inquiry via WhatsApp" integration.
- **Minimalist Footer**: Quick links, contact numbers, and social channels.

#### [NEW] [index.css](file:///c:/Users/chitr/Downloads/my%20websites/alpine%20nest%20homestay/index.css)
Custom Vanilla CSS implementation containing:
- **Design Tokens**: CSS variables for background colors (`#FAF8F4`), typography, shadows, margins, and border radii.
- **Glassmorphism System**: Class definitions with `backdrop-filter: blur(24px)`, subtle borders, and soft shadows.
- **Modern Typography**: Imports for Outfit/Plus Jakarta Sans and Inter from Google Fonts.
- **Smooth Animations**: Transitions, hover scale effects, float behaviors, fade-up entries, and custom easing curves.
- **Layout Grids**: 12-column grid and Flexbox systems optimized for mobile responsiveness.

#### [NEW] [main.js](file:///c:/Users/chitr/Downloads/my%20websites/alpine%20nest%20homestay/main.js)
Custom JavaScript file containing:
- **Navbar Scroll Effect**: Changes navbar background opacity and backdrop filter strength based on scroll position.
- **Tilt Micro-interaction**: Lightweight 3D tilt effect on key glassmorphic cards using mouse movements.
- **Custom Lightbox**: Lightbox code for gallery image expansion.
- **Rooms Showcase Control**: Tab or slider system to swap active room cards smoothly.
- **Interactive Booking Form Logic**: Captures dates and guest counts, and formats a customized pre-filled WhatsApp message sent to the host.
- **Intersection Observer**: Smooth reveal-on-scroll animations for elements.

### Image Assets

We will generate and save these custom high-quality visual assets using the `generate_image` tool:
1. `hero_lodge.png`: A stunning cozy modern mountain retreat interior, morning sunlight, wood textures, forest outside the window, ultra-premium look.
2. `room_capsule.png`: A futuristic yet cozy capsule-themed bedroom with wood finishes, soft warm lighting, linen.
3. `room_luxury_1bhk.png`: A spacious, sunlit 1BHK living area, modern minimalist design, luxury retreat feel.
4. `room_luxury_2bhk.png`: A grand 2BHK bedroom, premium styling, private terrace view, warm tones.
5. `gallery_coffee_woods.png`: A close-up of warm coffee, wood textures, mountain vibe, cozy atmosphere.

---

## Verification Plan

### Automated Checks & Lints
- Validate HTML syntax and CSS rule compliance.

### Manual Verification
- **Visual & UI check**: Open the page locally and check that typography, colors, padding, and alignments match the spec exactly on both desktop and mobile resolutions.
- **Interactions check**:
  - Test Navbar scroll blur and highlight transition.
  - Test Rooms slider tabs/switches.
  - Test Gallery lightbox popup and navigation.
  - Test Booking inquiry button (verify it constructs the correct WhatsApp URL).
  - Hover effects on buttons, room cards, and amenities.
