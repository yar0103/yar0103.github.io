import './App.css';
import { useState, createContext } from 'react';

//components
import Visual from './components/Visual';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Introduction from './components/Introduction';
import Header from './components/Header';
import Board from './components/Board';

function App() {

  const [theme, setTheme] = useState(false);

  const changeMode = () => {
    setTheme(!theme);
  };

  function totop() {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App" id={theme ? 'dark-mode' : 'light-mode'}>

      {/* header */}
      <Header theme={theme} changeMode={changeMode} />

      {/* visual */}
      <Visual />

      {/* projects */}
      <Projects />

      {/* skills */}
      <Skills />

      {/* introduction */}
      <Introduction theme={theme} setTheme={setTheme} changeMode={changeMode} />

      {/* board */}
      <Board />

      {/* footer */}
      <div className='footer'>

      </div>

      <i class="bi bi-arrow-up-short totop" onClick={totop}></i>
    </div>
  );
}

export default App;
