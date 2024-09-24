const Introduction = ({theme}) => {
  return (
    <div className="container-md mt-4 text-center">
        <div className="row ">
          <h2 className="mt-4 mb-4" id={theme ? 'dark-mode' : 'light-mode'}>
            <u>Introduction Yu A Rin</u>
          </h2>
          <div className="col-sm-6 mt-4 mb-3 mb-sm-0 ">
            <div className="card text-bg-dark mb-4 ">
              <img src="image/hobby-1.png" className="card-img" alt="..." />
              <div className="card-img-overlay ">
                <p className="card-title fs-4">Drawing</p>
                <p className="card-text">
                  손으로 그리거나 만드는것을 좋아합니다.
                </p>
                <p className="card-text">
                  <small>I like drawing and making things by hand.</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-4 mb-3 mb-sm-0">
            <div className="card text-bg-dark mb-4">
              <img src="image/hobby-2.png" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-title fs-4">Walking</p>
                <p className="card-text">자연을 좋아하고 걷는걸 즐깁니다.</p>
                <p className="card-text">
                  <small>I love nature and enjoy walking.</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card text-bg-dark mb-4 ">
              <img src="image/hobby-3.png" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-title fs-4">Music</p>
                <p className="card-text">음악과 함께하면 행복해집니다.</p>
                <p className="card-text">
                  <small>Being with music makes me happy.</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card text-bg-dark mb-4 ">
              <img src="image/hobby-4.png" className="card-img" alt="..." />
              <div className="card-img-overlay">
                <p className="card-title fs-4">Picture</p>
                <p className="card-text">아름다운 곳을 사진으로 남겨요.</p>
                <p className="card-text">
                  <small>Take pictures of beautiful places.</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Introduction;