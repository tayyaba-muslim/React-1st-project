import React from 'react';

const CardComponent = ({ title, price, thumbnail, description }) => {
  return (
    <div className="card h-100 shadow-sm" style={{ width: '100%' }}>
      <img
        src={thumbnail}
        className="card-img-top"
        alt={title}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted" style={{ flexGrow: 1 }}>{description}</p>
        <button className="btn btn-primary mt-auto" disabled>
          ${price}
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
