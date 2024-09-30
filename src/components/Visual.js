import { useState } from 'react';
import { visual } from '../data';

const Visual = () => {
  const [visualImage] = useState(visual);

  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true" style={{ marginTop: '160px' }}>
      <div className="carousel-inner">

        {visualImage.map((img, i) => {
          return (
            <div className="carousel-item active" key={i}>
              <img
                src={img.image}
                className="d-block w-100"
                alt="visual"
              />
            </div>
          )
        })}

      </div>
      {/* prev Btn */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      {/* next Btn */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Visual;
