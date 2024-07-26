import React from 'react';
import './Notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faBuilding, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
  console.log('Notification component rendered');

  const taskNotifications = [
    "Harvest the crops before the rain starts.",
    "Update the irrigation schedule for the new season.",
    "Check and repair the farm equipment."
  ];

  const companyUpdates = [
    "New agricultural policies have been released. Review the changes.",
    "Farmers' meet-up scheduled for next month.",
    "Introduction of new farming techniques workshop."
  ];

  const eventInformation = [
    "Organic Farming Fair this weekend.",
    "Seed distribution event on the 15th.",
    "Soil health management workshop on the 22nd."
  ];

  return (
    <div className="notification">
      <div className="notification-container">
        <div className="notification-column">
          <h2 className="topic-title"><FontAwesomeIcon icon={faTasks} /> Farm Target</h2>
          <ul>
            {taskNotifications.map((notification, index) => (
              <li key={index}>
                {notification}
              </li>
            ))}
          </ul>
        </div>
        <div className="notification-column">
          <h2 className="topic-title"><FontAwesomeIcon icon={faBuilding} /> Farm Updates</h2>
          <ul>
            {companyUpdates.map((update, index) => (
              <li key={index}>
                {update}
              </li>
            ))}
          </ul>
        </div>
        <div className="notification-column">
          <h2 className="topic-title"><FontAwesomeIcon icon={faCalendarAlt} /> Upcoming Events</h2>
          <ul>
            {eventInformation.map((event, index) => (
              <li key={index}>
                {event}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notification;
