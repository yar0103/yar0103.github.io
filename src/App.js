/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let [portfolioTitle, setPortfolioTitle] = useState([
    '[Team] 쇼핑몰',
    '[개인] 애플 스토어',
    '[개인] 사이드 프로젝트',
  ]);

  let [like, setLike] = useState([0, 0, 0]);

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">Rins's Portfolio List</h4>
      </div>

      {portfolioTitle.map((props, i) => {
        return (
          <div className="list">
            <h4 className="number">No. {i + 1}</h4>
            <h2>
              {props}
              <span
                onClick={() => {
                  let copy = [...like];
                  copy[i] = copy[i] + 1;
                  setLike(copy);
                }}
              >
                <img src="like.png" alt="like" className="likeImg" />
              </span>
              {like[i]}
            </h2>
            <button className="detailBtn">보러가기</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
