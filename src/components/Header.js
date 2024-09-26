import ReactSwitch from 'react-switch';
import { navCategory } from '../data';
import { useState } from 'react';

const Header = ({ theme, setTheme, changeMode }) => {
  const [navCategoryTitle] = useState(navCategory);

  return (
    <div className='navbarWrapper'>
      <nav className="navbar " id={theme ? 'dark-mode' : 'light-mode'}>
        <div className="container-fluid">
          {/* mode switch */}
          <div className="switch">
            <ReactSwitch
              onChange={changeMode}
              checked={theme}
              onColor="#fff"
              offColor="#000"
              className={theme ? 'dark-mode-switch' : 'light-mode-switch'}
              handleDiameter={20}
              uncheckedIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#fff"
                  style={{ margin: '5px' }}
                  className="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              }
              checkedIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  style={{ marginLeft: '8px' }}
                  fill="#000"
                  className="bi bi-moon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                </svg>
              }
            />
          </div>

          {/* logo */}
          <a className="navbar-brand" href="#">
            <img
              src={theme ? 'image/logo-white.png' : 'image/logo.png'}
              alt="logo"
              className="logo"
            />
          </a>

          {/* menu toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-theme={theme ? 'dark' : null}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              id={theme ? 'dark-mode' : 'light-mode'}
            >
              {navCategory.map((nc, i) => {
                return (
                  <li className="nav-item" key={i}>
                    <a className="nav-link active" aria-current="page" href="#">
                      {navCategory[i]}
                    </a>
                  </li>
                )
              })}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <nav
        className="navbar navbar-dark justify-content-center"
        id={theme ? 'dark-mode' : 'light-mode'}
      >
        <ul class="nav nav-underline">
          {navCategory.map((nc, i)=>{
            return(
              <li class="nav-item" key={i}>
            <a class="nav-link link-dark" aria-current="page" href="#">
              {navCategory[i]}
            </a>
          </li>
            )
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

