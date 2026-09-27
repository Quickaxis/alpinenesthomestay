import React from 'react';
import { CigaretteOff, VolumeX, Users, Sparkles, IdCard, AlertCircle } from 'lucide-react';
import styles from './HouseRulesSection.module.css';

const rules = [
  {
    icon: CigaretteOff,
    title: "100% Non-Smoking Inside",
    desc: "Smoking is strictly prohibited inside all suites and indoor common areas to ensure fresh air for all guests."
  },
  {
    icon: VolumeX,
    title: "Quiet Hours After 10:00 PM",
    desc: "To respect neighborly peace and sleeping guests, no loud music or disruptive noise after 10:00 PM."
  },
  {
    icon: IdCard,
    title: "Government ID Required",
    desc: "A valid government-issued photo ID (Aadhaar, Passport, Voter ID) is mandatory for every guest during check-in."
  },
  {
    icon: Users,
    title: "Respect Fellow Guests",
    desc: "Alpine Nest is a community sanctuary for families, couples, and professionals. Mutual respect is cherished."
  },
  {
    icon: Sparkles,
    title: "Keep The Property Clean",
    desc: "Please treat our homestay like your own home and keep living areas and private kitchens clean and tidy."
  },
  {
    icon: AlertCircle,
    title: "Care For Amenities",
    desc: "Any intentional damage or breakage to furniture, appliances, or decor will incur replacement charges."
  }
];

const HouseRulesSection = () => {
  return (
    <section id="rules" className={styles.section}>
      <div className="section-container">
        
        <div className={styles.header}>
          <span className="eyebrow">HOUSE POLICIES</span>
          <h2 className={styles.heading}>House Rules & Guidelines</h2>
          <p className={styles.subheading}>
            Simple, thoughtful house guidelines created to ensure a peaceful, clean, and comfortable environment for every guest.
          </p>
        </div>

        <div className={styles.grid}>
          {rules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div key={idx} className={styles.ruleCard}>
                <div className={styles.iconCircle}>
                  <Icon size={22} />
                </div>
                <h3 className={styles.ruleTitle}>{rule.title}</h3>
                <p className={styles.ruleDesc}>{rule.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HouseRulesSection;
