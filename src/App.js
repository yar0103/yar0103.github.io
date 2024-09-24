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

  return (
    <div className="App" id={theme ? 'dark-mode' : 'light-mode'}>
      {/* header */}
      <Header theme={theme} changeMode={changeMode} />

      {/* visual */}
      <Visual />

      {/* introduction */}
      <Introduction theme={theme} setTheme={setTheme} changeMode={changeMode}/>

      {/* projects */}
      <Projects />

      {/* board */}
      <div className="container-md mt-4">
        
      </div>

      {/* footer */}
    </div>
  );
}

export default App;
