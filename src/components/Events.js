// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
// import './Events.css';

// const schemesData = [
//   {
//     id: 1,
//     name: 'CROP INSURANCE SCHEME',
//     description: 'Insure your crops against natural calamities.',
//     benefits: 'Provides financial support in the event of crop failure due to natural calamities.',
//     imageUrl: '/images/crop-insurance.jpg',
//     type: 'scheme',
//   },
//   {
//     id: 2,
//     name: 'SOIL HEALTH CARD SCHEME',
//     description: 'Improve soil health and productivity.',
//     benefits: 'Provides a soil health card to monitor soil health and recommend corrective measures.',
//     imageUrl: '/images/soil-health-card.jpg',
//     type: 'scheme',
//   },
//   {
//     id: 3,
//     name: 'ORGANIC FARMING SCHEME',
//     description: 'Promote organic farming practices.',
//     benefits: 'Supports farmers in adopting organic farming methods.',
//     imageUrl: '/images/organic-farming.jpg',
//     type: 'scheme',
//   },
//   {
//     id: 4,
//     name: 'FARMERS TRAINING WORKSHOP',
//     description: 'Train farmers in modern farming techniques.',
//     benefits: '',
//     imageUrl: '/images/training-workshop.jpg',
//     type: 'workshop',
//   },
//   {
//     id: 5,
//     name: 'CROP INSURANCE SCHEME',
//     description: 'Insure your crops against natural calamities.',
//     benefits: 'Provides financial support in the event of crop failure due to natural calamities.',
//     imageUrl: '/images/crop-insurance.jpg',
//     type: 'scheme',
//   },
//   {
//     id: 6,
//     name: 'SOIL HEALTH CARD SCHEME',
//     description: 'Improve soil health and productivity.',
//     benefits: 'Provides a soil health card to monitor soil health and recommend corrective measures.',
//     imageUrl: '/images/soil-health-card.jpg',
//     type: 'scheme',
//   },
//   {
//     id: 7,
//     name: 'ORGANIC FARMING SCHEME',
//     description: 'Promote organic farming practices.',
//     benefits: 'Supports farmers in adopting organic farming methods.',
//     imageUrl: '/images/organic-farming.jpg',
//     type: 'scheme',
//   },
//   {
//     id: 8,
//     name: 'FARMERS TRAINING WORKSHOP',
//     description: 'Train farmers in modern farming techniques.',
//     benefits: '',
//     imageUrl: '/images/training-workshop.jpg',
//     type: 'workshop',
//   },
// ];

// const Register = () => {
//   const { id } = useParams();
//   return (
//     <div className="register-container">
//       <h1>Register for Workshop {id}</h1>
//       <form className="register-form">
//         <label>
//           Name:
//           <input type="text" name="name" />
//         </label>
//         <label>
//           Email:
//           <input type="email" name="email" />
//         </label>
//         <label>
//           Phone:
//           <input type="tel" name="phone" />
//         </label>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// const SchemeDetails = () => {
//   const { id } = useParams();
//   const scheme = schemesData.find((scheme) => scheme.id === parseInt(id));

//   return (
//     <div className="scheme-details-container">
//       <h1>{scheme.name}</h1>
//       <img src={scheme.imageUrl} alt={scheme.name} className="scheme-image" />
//       <p>{scheme.description}</p>
//       <h2>Benefits:</h2>
//       <p>{scheme.benefits}</p>
//     </div>
//   );
// };

// const Schemes = () => {
//   const navigate = useNavigate();

//   const handleSchemeClick = (item) => {
//     if (item.type === 'scheme') {
//       navigate(`/scheme-details/${item.id}`);
//     } else if (item.type === 'workshop') {
//       navigate(`/register/${item.id}`);
//     }
//   };

//   return (
//     <div className="schemes-container">
//       <h1>Schemes and Workshops</h1>
//       <ul className="schemes-list">
//         {schemesData.map((item) => (
//           <li key={item.id} className="scheme-item" onClick={() => handleSchemeClick(item)}>
//             <img src={item.imageUrl} alt={item.name} className="scheme-image" />
//             <div className="scheme-info">
//               <h2>{item.name}</h2>
//               <p>{item.description}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Schemes />} />
//         <Route path="/scheme-details/:id" element={<SchemeDetails />} />
//         <Route path="/register/:id" element={<Register />} />
//       </Routes>
//     </Router>
//   );
// };

// const reportWebVitals = (onPerfEntry) => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export { App as default, reportWebVitals };