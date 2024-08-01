import React from 'react';
import { useParams } from 'react-router-dom';
import './SchemeDetails.css';

const schemesData = [
  {
    id: 1,
    name: 'Crop Insurance Scheme',
    description: 'Insure your crops against natural calamities.',
    benefits: 'Provides financial support in the event of crop failure due to natural calamities.',
    imageUrl: '/images/crop-insurance.jpg',
    type: 'scheme',
  },
  {
    id: 2,
    name: 'Soil Health Card Scheme',
    description: 'Improve soil health and productivity.',
    benefits: 'Provides a soil health card to monitor soil health and recommend corrective measures.',
    imageUrl: '/images/soil-health-card.jpg',
    type: 'scheme',
  },
  {
    id: 3,
    name: 'Organic Farming Scheme',
    description: 'Promote organic farming practices.',
    benefits: 'Supports farmers in adopting organic farming methods.',
    imageUrl: '/images/organic-farming.jpg',
    type: 'scheme',
  },
  
];

const SchemeDetails = () => {
  const { id } = useParams();
  const scheme = schemesData.find((scheme) => scheme.id === parseInt(id));

  return (
    <div className="scheme-details-container">
      <h1>{scheme.name}</h1>
      <img src={scheme.imageUrl} alt={scheme.name} className="scheme-image" />
      <p>{scheme.description}</p>
      <h2>Benefits:</h2>
      <p>{scheme.benefits}</p>
    </div>
  );
};

export default SchemeDetails;