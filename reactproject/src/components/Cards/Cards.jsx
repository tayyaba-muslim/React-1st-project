import React from 'react';

const CardComponent = ({ title, price, thumbnail, description }) => {
  return (
    <div className="col d-flex justify-content-center">
      <div className="card shadow-sm" style={{ width: '18rem' }}>
        <img src={thumbnail} className="card-img-top" alt={title} style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ flexGrow: 1 }}>{description}</p>
          <a href="#" className="btn btn-primary mt-auto">${price}</a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
