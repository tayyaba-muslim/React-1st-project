import React from 'react';

export default function Home() {
  return (
    <div className="container mt-4">
      <div id="homeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner rounded shadow-lg">

          <div className="carousel-item active">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-beautiful-sandy-beach-on-the-ocean-on-3d-python-3ds-max-image_2955175.jpg"
              className="d-block w-100"
              alt="Beach"
              style={{ height: '600px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h3 className="text-light">Welcome to Paradise</h3>
              <p className="text-light">Experience nature like never before.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPP3VZEQV9mGZLOxaELjoIAgM--0SGK_zfErg3li6NCONoa7u9qT-m98Q3tWNSXsWFwn0&usqp=CAU"
              className="d-block w-100"
              alt="Mountains"
              style={{ height: '600px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h3 className="text-light">Adventure Awaits</h3>
              <p className="text-light">Find peace in the peaks.</p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVklZQtShH8RmEm5U6DhC007Ix4rCq6t-NFWDloJud0kWnzG2ZRsoA6Gh1Y_uqhUZ96l4&usqp=CAU"
              className="d-block w-100"
              alt="Desert"
              style={{ height: '600px', objectFit: 'cover' }}
            />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
              <h3 className="text-light">Endless Horizons</h3>
              <p className="text-light">Feel the wind in wide open spaces.</p>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
