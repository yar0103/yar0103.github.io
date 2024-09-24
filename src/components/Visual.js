const Visual = () => {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="image/website-1.png"
            className="d-block w-100"
            alt="visual-1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="image/website-2.png"
            className="d-block w-100"
            alt="visual-2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="image/website-3.png"
            className="d-block w-100"
            alt="visual-3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
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
