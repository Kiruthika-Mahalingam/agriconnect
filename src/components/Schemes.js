import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Schemes.css';

const schemesData = [
  {
    id: 1,
    name: 'CROP INSURANCE SCHEME',
    description: 'Insure your crops against natural calamities.',
    benefits: 'Provides financial support in the event of crop failure due to natural calamities.',
    imageUrl: '/images/crop-insurance.jpg',
    type: 'scheme',
  },
  {
    id: 2,
    name: 'SOIL HEALTH CARD SCHEME',
    description: 'Improve soil health and productivity.',
    benefits: 'Provides a soil health card to monitor soil health and recommend corrective measures.',
    imageUrl: '/images/soil-health-card.jpg',
    type: 'scheme',
  },
  {
    id: 3,
    name: 'ORGANIC FARMING SCHEME',
    description: 'Promote organic farming practices.',
    benefits: 'Supports farmers in adopting organic farming methods.',
    imageUrl: '/images/organic-farming.jpg',
    type: 'scheme',
  },
  {
    id: 4,
    name: 'FARMERS TRAINING WORKSHOP',
    description: 'Train farmers in modern farming techniques.',
    benefits: '',
    imageUrl: '/images/training-workshop.jpg',
    type: 'workshop',
  },
  {
    id: 5,
    name: 'CROP INSURANCE SCHEME',
    description: 'Insure your crops against natural calamities.',
    benefits: 'Provides financial support in the event of crop failure due to natural calamities.',
    imageUrl: '/images/crop-insurance.jpg',
    type: 'scheme',
  },
  {
    id: 6,
    name: 'SOIL HEALTH CARD SCHEME',
    description: 'Improve soil health and productivity.',
    benefits: 'Provides a soil health card to monitor soil health and recommend corrective measures.',
    imageUrl: '/images/soil-health-card.jpg',
    type: 'scheme',
  },
  {
    id: 7,
    name: 'ORGANIC FARMING SCHEME',
    description: 'Promote organic farming practices.',
    benefits: 'Supports farmers in adopting organic farming methods.',
    imageUrl: '/images/organic-farming.jpg',
    type: 'scheme',
  },
  {
    id: 8,
    name: 'FARMERS TRAINING WORKSHOP',
    description: 'Train farmers in modern farming techniques.',
    benefits: '',
    imageUrl: '/images/training-workshop.jpg',
    type: 'workshop',
  },
];

const Schemes = () => {
  const navigate = useNavigate();

  const handleSchemeClick = (item) => {
    if (item.type === 'scheme') {
      navigate(`/scheme-details/${item.id}`);
    } else if (item.type === 'workshop') {
      navigate(`/register/${item.id}`);
    }
  };

  return (
    <div className="schemes-container">
      <h1>Schemes and Workshops</h1>
      <ul className="schemes-list">
        {schemesData.map((item) => (
          <li key={item.id} className="scheme-item" onClick={() => handleSchemeClick(item)}>
            <img src={item.imageUrl} alt={item.name} className="scheme-image" />
            <div className="scheme-info">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schemes;