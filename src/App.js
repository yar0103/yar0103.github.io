/* eslint-disable */
import './App.css';
import { useState } from 'react';

function App() {
  let [portfolio, setPortfolio] = useState([
    {
      title: 'Shoes shop',
      link: '/myshop', 
      like: 0
    },
    {
      title: 'Apple store',
      link: '/appleStore', 
      like: 0
    },
    {
      title: 'Hangman game',
      link: '/myHangmanGame', 
      like: 0
    },
    {
      title: 'Todo List',
      link: '/myTodoList', 
      like: 0
    },
    {
      title: 'Youtube music',
      link: '', 
      like: 0
    },
    {
      title: 'MiniGame - Photo matching',
      link: '/mini_photoMatching', 
      like: 0
    },
    {
      title: 'MiniGame - Typing Words',
      link: '/mini_typingWords', 
      like: 0
    },
  ]);

  function totop () {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <div>
        <h4 className="black-nav">Rin's Portfolio List</h4>
      </div>

      {portfolio.map((props, i) => {
        return (
          <div className="list" >
            <h4 className="number">No. {i + 1}</h4>
            <h2>
              {props.title}
            </h2>
            <div className='container'>
              <button className='goBtn'><a href={props.link} className='link'>GO</a></button>
              <span
                  onClick={() => {
                    setPortfolio((prev)=>{
                      let copy = [...prev]
                      copy[i].like++;
                      return copy;
                    })
                  }}
                >
                  <img src="like.png" alt="like" className="likeImg" />
              </span>
              <span className='likeNum'> {props.like}</span>
            </div>
          </div>
        );
      })}

      <img src='totop.png' alt='totop' className='totop' onClick={totop}/>

    </div>
  );
}

export default App;
