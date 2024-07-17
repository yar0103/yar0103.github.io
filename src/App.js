/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let [portfolioTitle, setPortfolioTitle] = useState([
    'Shoes shop',
    'Apple store',
    'Hangman game',
    'Todo List',
    'Youtube music',
    'MiniGame - Photo matching'
  ]);

  let [like, setLike] = useState([0, 0, 0]);
  const [link, setLink] = useState(['/myshop','/myAppleStore','/myHangmanGame','/myTodoList','','/mini_photoMatching'])

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">Rin's Portfolio List</h4>
      </div>

      {portfolioTitle.map((props, i) => {
        return (
          <div className="list">
            <h4 className="number">No. {i + 1}</h4>
            <h2>
              {props}
            </h2>
            <div className='container'>
              <button className='goBtn'><a href={`${link[i]}`} className='link'>GO</a></button>
              <span
                  onClick={() => {
                    let copy = [...like];
                    copy[i] = copy[i] + 1;
                    setLike(copy);
                  }}
                >
                  <img src="like.png" alt="like" className="likeImg" />
              </span>
              <span className='likeNum'> {like[i]}</span>
            </div>
          </div>
        );
      })}


    </div>
  );
}

export default App;
