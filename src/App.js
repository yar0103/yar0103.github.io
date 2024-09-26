import './App.css';
import { useState, createContext } from 'react';

//components
import Visual from './components/Visual';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Header from './components/Header';

function App() {

  const [theme, setTheme] = useState(false);

  const changeMode = () => {
    setTheme(!theme);
  };

  function totop () {
    window.scrollTo(0, 0);
  };

  return (
    <div className="App" id={theme ? 'dark-mode' : 'light-mode'}>

      {/* header */}
      <Header theme={theme} changeMode={changeMode} />

      {/* visual */}
      <Visual />

      {/* introduction */}
      <Introduction theme={theme} setTheme={setTheme} changeMode={changeMode}/>

      {/* projects */}
      <Projects  />

      {/* board */}
      <div className="container-md mt-4">
        
      </div>

      {/* footer */}
      <div className='footer'>
        footer가 과연 필요한가?
      </div>

      <i class="bi bi-arrow-up-short totop" onClick={totop}></i>
    </div>
  );
}

export default App;
