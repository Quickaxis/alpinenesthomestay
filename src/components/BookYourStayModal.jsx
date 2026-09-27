import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { useBookingModal } from '../context/BookingContext';
import styles from './BookYourStayModal.module.css';

const BookYourStayModal = () => {
  const { isModalOpen, closeModal } = useBookingModal();
  const modalRef = useRef(null);
  
  const WHATSAPP_NUMBER = '918486627950';
  const PHONE_NUMBER = '+918486627950';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, closeModal]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isModalOpen) return null;

  const defaultWhatsappMsg = encodeURIComponent("Hi Alpine Nest Homestay, I would like to check availability and book a stay!");

  return (
    <div 
      className={styles.backdrop} 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className={styles.modal} ref={modalRef}>
        <button 
          className={styles.closeBtn} 
          onClick={closeModal}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>
        
        <h2 id="booking-modal-title" className={styles.title}>
          BOOK YOUR STAY
        </h2>
        <p className={styles.subtitle}>
          Direct Booking with Alpine Nest Host
        </p>
        <p className={styles.scheduleText}>
          Bookings via WhatsApp or Call<br/>9:00 AM to 9:00 PM daily.
        </p>

        <div className={styles.buttonGroup}>
          <a 
            href={`https://wa.me/918486627950`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.bookNowBtn}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <MessageCircle size={18} /> BOOK VIA WHATSAPP NOW
          </a>
          
          <a 
            href={`tel:+918486627950`} 
            className={styles.callBtn}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
          >
            <Phone size={18} /> CALL TO BOOK
          </a>
          
          <div className={styles.alternateNumberWrapper}>
            <a href="tel:+919678784771" className={styles.alternateNumber}>
              Alternate: +91 96787 84771
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookYourStayModal;
