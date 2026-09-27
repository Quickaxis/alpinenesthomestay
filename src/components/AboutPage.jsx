import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);
import SEO from './SEO';
import styles from './AboutPage.module.css';
import { useBookingModal } from '../context/BookingContext';

const AboutPage = () => {
  const { openModal } = useBookingModal();
  const pageRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      // Hero animations
      gsap.from('.hero-anim', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      // Story section
      gsap.from('.story-text', {
        scrollTrigger: {
          trigger: `.${styles.storySection}`,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Value cards
      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: `.${styles.valuesSection}`,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });

      // Location section
      gsap.from('.location-anim', {
        scrollTrigger: {
          trigger: `.${styles.locationSection}`,
          start: 'top 85%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // CTA section
      gsap.from('.cta-anim', {
        scrollTrigger: {
          trigger: `.${styles.ctaSection}`,
          start: 'top 90%',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.aboutPage} ref={pageRef}>
      <SEO 
        title="About Alpine Nest Homestay | Luxury Stay in Dibrugarh, Assam"
        description="Discover Alpine Nest Homestay in Amolapatty, Dibrugarh's first capsule-themed luxury homestay designed for families, couples, and professionals."
        path="/about"
      />
      {/* Hero Section */}
      <section className={`${styles.heroSection} section-container`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <span className={`eyebrow hero-anim ${styles.eyebrow}`}>ABOUT ALPINE NEST</span>
            <h1 className={`hero-anim ${styles.mainHeading}`}>
              WHERE COMFORT<br />
              MEETS CLASS IN<br />
              DIBRUGARH.
            </h1>
            <p className={`hero-anim ${styles.heroText}`}>
              Experience one of Dibrugarh's most unique premium homestays featuring luxury interiors, capsule-inspired architecture, and thoughtfully designed living spaces.
            </p>
          </div>
          
          <div className={`hero-anim ${styles.heroDecoration}`}>
            <span className={styles.largeOutlineText}>ALPINE</span>
            <span className={styles.largeOutlineText}>NEST</span>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className={`${styles.storySection} section-container`}>
        <div className={styles.storyGrid}>
          <div className={styles.storyLeft}>
            <span className={`eyebrow story-text ${styles.eyebrow}`}>MORE THAN A PLACE TO SLEEP</span>
            <h2 className={`story-text ${styles.storyHeading}`}>
              A SANCTUARY THAT FEELS LIKE HOME.
            </h2>
          </div>
          <div className={styles.storyRight}>
            <p className="story-text">
              Whether you're visiting Dibrugarh for corporate work, medical visits, family vacations, or a relaxing weekend getaway, Alpine Nest offers spacious accommodations equipped with everything needed for a seamless stay.
            </p>
            <p className="story-text">
              Designed with warmth, elegance, and functionality, our suites offer private kitchens, dedicated workspaces, high-speed Wi-Fi, and plush bedding to deliver a world-class hospitality experience.
            </p>
            <p className="story-text">
              Located in the peaceful, safe residential neighborhood of Amolapatty, you enjoy complete tranquility while remaining minutes away from town conveniences, hospitals, and transit points.
            </p>
          </div>
        </div>
      </section>

      {/* Three Core Values */}
      <section className={`${styles.valuesSection} section-container`}>
        <div className={styles.valuesHeader}>
          <span className={`eyebrow ${styles.eyebrow}`}>THE ALPINE NEST PHILOSOPHY</span>
          <h2 className={styles.valuesHeading}>THOUGHTFUL DESIGN.<br/>UNCOMPROMISED COMFORT.</h2>
        </div>
        
        <div className={styles.valuesGrid}>
          <div className={`value-card ${styles.valueCard}`}>
            <span className={styles.cardNumber}>01</span>
            <h3 className={styles.cardTitle}>CAPSULE INNOVATION</h3>
            <p className={styles.cardText}>Dibrugarh's first capsule-themed architecture designed with modern ergonomics and soothing mood lighting.</p>
          </div>
          
          <div className={`value-card ${styles.valueCard}`}>
            <span className={styles.cardNumber}>02</span>
            <h3 className={styles.cardTitle}>SPACIOUS LUXURY</h3>
            <p className={styles.cardText}>Spacious 1BHK, 2BHK, and 1RK suites featuring private kitchens, luxury bedding, and dedicated workspaces.</p>
          </div>
          
          <div className={`value-card ${styles.valueCard}`}>
            <span className={styles.cardNumber}>03</span>
            <h3 className={styles.cardTitle}>AMOLAPATTY PEACE</h3>
            <p className={styles.cardText}>A peaceful, secure residential sanctuary in Dibrugarh that provides true relaxation after a busy day.</p>
          </div>
        </div>
      </section>

      {/* Location Story */}
      <section className={`${styles.locationSection} section-container`}>
        <div className={styles.locationGrid}>
          <div className={styles.locationContent}>
            <span className={`eyebrow location-anim ${styles.eyebrow}`}>IN THE HEART OF UPPER ASSAM</span>
            <h2 className={`location-anim ${styles.locationHeading}`}>
              CONVENIENT AMOLAPATTY LOCATION.
            </h2>
            <p className={`location-anim ${styles.locationText}`}>
              Alpine Nest sits in Amolapatty, opposite the Govt. Girls School, offering immediate connectivity to the Brahmaputra Riverfront, Dibrugarh Town, Assam Medical College, and Mohanbari Airport.
            </p>
          </div>
          
          <div className={`location-anim ${styles.locationDecoration}`}>
            <span className={styles.largeOutlineTextLocation}>DIBRUGARH</span>
            <span className={styles.smallSolidTextLocation}>AMOLAPATTY, ASSAM</span>
          </div>
        </div>
      </section>

      {/* Rooms CTA */}
      <section className={`${styles.ctaSection} section-container`}>
        <div className={styles.ctaBox}>
          <span className={`eyebrow cta-anim ${styles.ctaEyebrow}`}>READY TO RESERVE?</span>
          <h2 className={`cta-anim ${styles.ctaHeading}`}>FIND YOUR SUITE.</h2>
          <p className={`cta-anim ${styles.ctaText}`}>
            Explore the Skyline Suite, Capsule Studio, Cozy 2BHK Studio, or Niribili to find the perfect space for your Dibrugarh stay.
          </p>
          <div className={`cta-anim ${styles.ctaButtons}`}>
            <a href="/rooms" className={`pill-button pill-button-navy ${styles.exploreBtn}`}>
              EXPLORE OUR SUITES <ArrowRight size={18} />
            </a>
            <button onClick={openModal} className={`pill-button pill-button-white ${styles.bookBtn}`}>
              BOOK YOUR STAY <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
