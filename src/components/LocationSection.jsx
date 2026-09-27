import React from 'react';
import { MapPin, Navigation, Plane, Train, Compass, Building } from 'lucide-react';
import styles from './LocationSection.module.css';

const transitPoints = [
  { icon: Plane, label: "Dibrugarh Airport (MOH)", dist: "14 km (25 mins)" },
  { icon: Train, label: "Dibrugarh Railway Station", dist: "4.0 km (10 mins)" },
  { icon: Building, label: "Assam Medical College", dist: "3.2 km (8 mins)" },
  { icon: Compass, label: "Brahmaputra Riverfront", dist: "3.5 km (10 mins)" }
];

const LocationSection = () => {
  const MAP_URL = "https://maps.app.goo.gl/7v4AE7jQxCSDURGFA?g_st=aw";
  const MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.810505199653!2d94.9189035!3d27.4788325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374099b54cfa50e1%3A0xd04ee3bcc5057c93!2sAlpine%20Nest!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section id="location" className={styles.section}>
      <div className="section-container">
        
        <div className={styles.header}>
          <span className="eyebrow">LOCATION & CONNECTIVITY</span>
          <h2 className={styles.heading}>Find Us in Amolapatty, Dibrugarh</h2>
          <p className={styles.subheading}>
            Situated in a peaceful, secure residential pocket of Amolapatty, Alpine Nest offers effortless access to transit hubs, medical centers, and town dining.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left: Info & Transit */}
          <div className={styles.infoCol}>
            <div className={styles.addressCard}>
              <div className={styles.pinWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.addressInfo}>
                <span className={styles.label}>PROPERTY ADDRESS</span>
                <h3 className={styles.addressText}>Alpine Nest</h3>
                <p className={styles.addressSub}>
                  Amolapatty, Dibrugarh, Assam 786003<br />
                  <span className={styles.landmark}>(Opposite Govt. Girls School)</span>
                </p>
              </div>
            </div>

            <div className={styles.transitBox}>
              <h4 className={styles.transitTitle}>Transit & Key Landmarks</h4>
              <div className={styles.transitGrid}>
                {transitPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className={styles.transitItem}>
                      <Icon size={18} className={styles.transitIcon} />
                      <div>
                        <div className={styles.transitLabel}>{item.label}</div>
                        <div className={styles.transitDist}>{item.dist}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <a 
              href={MAP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`pill-button pill-button-navy ${styles.directionsBtn}`}
            >
              <Navigation size={18} /> GET DIRECTIONS ON GOOGLE MAPS
            </a>
          </div>

          {/* Right: Map Embed */}
          <div className={styles.mapCol}>
            <div className={styles.mapFrame}>
              <iframe
                title="Alpine Nest Homestay Exact Google Maps Location"
                src={MAP_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocationSection;
