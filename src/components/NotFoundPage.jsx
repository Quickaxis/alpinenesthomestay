import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import SEO from './SEO';

const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <SEO 
        title="Page Not Found | Alpine Nest Homestay"
        description="The page you are looking for does not exist. Return to the Alpine Nest Homestay homepage or explore our sanctuary suites."
        path="/404"
      />
      <div style={{ paddingTop: '160px', paddingBottom: '120px', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }} className="section-container">
        <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--color-orange)', letterSpacing: '0.15em', marginBottom: '16px' }}>404 ERROR</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-navy)', marginBottom: '24px', lineHeight: '1.1' }}>
          PAGE NOT FOUND.
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'var(--color-dark-text)', maxWidth: '500px', marginBottom: '40px', lineHeight: '1.6' }}>
          The page you are looking for might have been moved, renamed, or is temporarily unavailable.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="/" className="pill-button pill-button-navy">
            RETURN HOME <ArrowRight size={18} />
          </a>
          <a href="/rooms" className="pill-button pill-button-white" style={{ border: '1px solid rgba(23,63,122,0.1)' }}>
            VIEW OUR SUITES
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
