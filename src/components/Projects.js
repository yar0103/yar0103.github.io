const Projects = () => {
  return (
    <div className="container-md mt-4">
      <h2 className="mt-4 mb-4 text-center">
        <u>My Portfolios</u>
      </h2>
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Personal Projects
          </button>
          <button
            class="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Team Projects
          </button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div
          class="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <div class="row row-cols-1 mt-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="image/react_applestore.mp4"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Apple Store</h5>
                  <p class="card-text">
                    <strong>React / 반응형 / JWT / Route / 기능추가중..</strong>{' '}
                    <br />
                    <br></br>
                    핵심기능 : JWT로 로그인화면 구현 및 Route활용, 오픈캔버스
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="image/react_shoesmall.mp4"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Shoes Mall</h5>
                  <p class="card-text">
                    React / axios <br />
                    핵심기능 : 더보기 버튼 클릭시 서버에 데이터가 있으면
                    가져오고 없으면 그만보기 버튼으로 전환하여 더이상 클릭되지
                    않도록 구현
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="image/react_todoapp.mp4"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Todo List App</h5>
                  <p class="card-text">
                    React <br />
                    핵심기능 : input으로 내용추가, 및 수정기능과 삭제버튼 기능
                    구현
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="image/javascript_picturematchinggame.mp4"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Photo Matching Game</h5>
                  <p class="card-text">
                    Javascript <br />
                    핵심기능 : 배열에 이미지를 담아 저장하고 클릭한 두개의
                    상태가 같지 않을 경우 다시 닫히고 맞추면 이미지가 보여지는
                    기능 구현
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="image/javascript_typingwords.mp4"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Typing Words Game</h5>
                  <p class="card-text">
                    Javascript <br />
                    핵심기능 : 10초 안에 랜덤한 단어를 보여주고 타이핑을 알맞게
                    친 갯수를 저장하여 보여지도록 구현
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <div class="ratio ratio-16x9">
                  <iframe
                    src="image/javascript_hangmangame.mp4"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Hangman Game</h5>
                  <p class="card-text">
                    Javascript <br />
                    핵심기능 : setWord를 설정하면 그 단어를 알파벳 버튼을 눌러
                    6번 안에 맞추어야 하는 게임으로 맞는 것을 클릭하면 클릭한
                    알파벳이 보여지고 못맞춘 것은 보여지지 않도록 구현
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <div class="row row-cols-1 mt-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card">
                <img
                  src="image/react_shoppingmall.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Shopping Mall</h5>
                  <p class="card-text">
                    React / 마이그레이션 / JWT / MySQL
                    <br />
                    4명 part 분할담당 구현
                    <br />
                    나의 분담 : review, cart, css
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src="image/java_animalhospitalreservation.png"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">Animal Hospital Reservation</h5>
                  <p class="card-text">
                    Java Projects
                    <br />
                    4명 part 분할담당 구현
                    <br />
                    나의 분담 : review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
