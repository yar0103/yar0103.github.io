import { useState, useEffect } from 'react';
import {react, vue, javascript, java} from '../data';

const Projects = () => {
  const [reactData, setReactData] = useState(react);
  const [vueData, setVueData] = useState(vue);
  const [javascriptData, setJavascriptData] = useState(javascript);
  const [javaData, setJavaData] = useState(java);

  useEffect(() => {
    setReactData(reactData)
    setVueData(vueData)
    setJavascriptData(javascriptData)
    setJavaData(javaData)
  }, [])

  return (
    <div className="container-md mt-4">
      <h2 className="mt-4 mb-4 text-center">
        <u>My Portfolios</u>
      </h2>

      {/* tab category */}
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <button
          class="nav-link active"
          id="nav-react-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-react"
          type="button"
          role="tab"
          aria-controls="nav-react"
          aria-selected="true"
        >
          React
        </button>
        <button
          class="nav-link"
          id="nav-vue-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-vue"
          type="button"
          role="tab"
          aria-controls="nav-vue"
          aria-selected="false"
        >
          Vue
        </button>
        <button
          class="nav-link"
          id="nav-javascript-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-javascript"
          type="button"
          role="tab"
          aria-controls="nav-javascript"
          aria-selected="false"
        >
          Javascript
        </button>
        <button
          class="nav-link"
          id="nav-java-tab"
          data-bs-toggle="tab"
          data-bs-target="#nav-java"
          type="button"
          role="tab"
          aria-controls="nav-java"
          aria-selected="false"
        >
          Java
        </button>
      </div>

      {/* category Lists */}
      <div class="tab-content" id="nav-tabContent">
        {/* react Lists */}
        <div
          class="tab-pane fade show active"
          id="nav-react"
          role="tabpanel"
          aria-labelledby="nav-react-tab"
          tabindex="0"
        >
          <div class="row row-cols-1 mt-1 row-cols-md-2 g-4">
            {react.map((r, i) => {
              return (
                <div class="col" key={i}>
                  <div class="card">
                    <div class="ratio ratio-16x9">
                      <iframe
                        src={r.video}
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{r.title}</h5>
                      <p class="card-text">
                        {r.subTitle}<br /><br />
                        {r.mainFunction} <br /><br />
                        {r.result} <br /><br />
                        <button type="button" class="btn btn-secondary">
                          <a href={r.link}>
                            구경가기
                          </a>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        {/* vue Lists */}
        <div
          class="tab-pane fade"
          id="nav-vue"
          role="tabpanel"
          aria-labelledby="nav-vue-tab"
          tabindex="0"
        >
          <div class="row row-cols-1 mt-1 row-cols-md-2 g-4">
          {vue.map((v, i) => {
              return (
                <div class="col" key={i}>
                  <div class="card">
                    <div class="ratio ratio-16x9">
                      <iframe
                        src={v.video}
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{v.title}</h5>
                      <p class="card-text">
                        {v.subTitle}<br /><br />
                        {v.mainFunction} <br /><br />
                        {v.result} <br /><br />
                        <button type="button" class="btn btn-secondary">
                          <a href={v.link}>
                            구경가기
                          </a>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        {/* javascript Lists */}
        <div
          class="tab-pane fade"
          id="nav-javascript"
          role="tabpanel"
          aria-labelledby="nav-javascript-tab"
          tabindex="0"
        >
          <div class="row row-cols-1 mt-1 row-cols-md-2 g-4">
            {javascript.map((js,i)=>{
              return(
                <div class="col" key={i}>
                  <div class="card">
                    <div class="ratio ratio-16x9">
                      <iframe
                        src={js.video}
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{js.title}</h5>
                      <p class="card-text">
                        {js.subTitle}<br /><br />
                        {js.mainFunction} <br /><br />
                        {js.result} <br /><br />
                        <button type="button" class="btn btn-secondary">
                          <a href={js.link}>
                            구경가기
                          </a>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        {/* java Lists */}
        <div
          class="tab-pane fade"
          id="nav-java"
          role="tabpanel"
          aria-labelledby="nav-java-tab"
          tabindex="0"
        >
          <div class="row row-cols-1 mt-1 row-cols-md-2 g-4">
          {java.map((jv,i)=>{
              return(
                <div class="col" key={i}>
                  <div class="card">
                    <div class="ratio ratio-16x9">
                      <iframe
                        src={jv.video}
                        class="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title">{jv.title}</h5>
                      <p class="card-text">
                        {jv.subTitle}<br /><br />
                        {jv.mainFunction} <br /><br />
                        {jv.result} <br /><br />
                        <button type="button" class="btn btn-secondary">
                          <a href={jv.link}>
                            구경가기
                          </a>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
