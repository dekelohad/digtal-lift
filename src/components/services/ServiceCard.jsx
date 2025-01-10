import React from 'react';
import PropTypes from 'prop-types';
import './ServiceCard.css';

const ServiceCard = ({ number, title, description, isActive, onClick }) => {
  return (
    <div 
      className={`service-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="service-number">{number}.</div>
      <div className="service-content">
        <h3>{title}</h3>
        {isActive && <p>{description}</p>}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

ServiceCard.defaultProps = {
  isActive: false,
  onClick: () => {}
};

export default ServiceCard; 