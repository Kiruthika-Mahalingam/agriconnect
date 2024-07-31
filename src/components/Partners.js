import React from 'react';
import './Partners.css';
import partner1logo from '../assets/partner1-logo.webp'

const partners = [
  { name: 'Partner 1', logo: '../assets/partner1-logo.webp' },
  { name: 'Partner 2', logo: 'partner2-logo.webp' },
  { name: 'Partner 3', logo: 'partner3-logo.webp' },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <div className="partners-container">
      <h1>Partner Organizations</h1>
      
      <section className="partner-list">
        <h2>Partner List</h2>
        <div className="partner-logos">
          {partners.map((partner, index) => (
            <div key={index} className="partner">
              <img src={partner.logo} alt={`${partner.name} Logo`} className="partner-logo" />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="collaboration-details">
        <h2>Collaboration Details</h2>
        <p>
          Our website collaborates with various partner organizations to provide valuable resources and services to our users.
          Through these collaborations, we aim to enhance the user experience and offer comprehensive support.
        </p>
        <p>
          Each partner organization brings unique expertise and resources, enabling us to provide a wide range of services and
          opportunities to our users.
        </p>
      </section>
      
      <section className="partnership-opportunities">
        <h2>Opportunities</h2>
        <p>
          We are always looking for new partnership opportunities to expand our reach and provide more value to our users.
          If you are interested in becoming a partner, please contact us for more information on how to collaborate with us.
        </p>
        <p>
          As a partner, you will have the opportunity to work with a dynamic team and contribute to the growth and success of our
          platform. Join us in our mission to provide exceptional resources and services to our users.
        </p>
      </section>
    </div>
  );
};

export default Partners;
