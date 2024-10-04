import { useState, useEffect } from 'react';
import { react, vue, javascript, java } from '../data';

import ProjectCard from './ProjectCard';

const Projects = () => {
  const [reactData, setReactData] = useState(react);
  const [vueData, setVueData] = useState(vue);
  const [javascriptData, setJavascriptData] = useState(javascript);
  const [javaData, setJavaData] = useState(java);

  useEffect(() => {
    setReactData(react);
    setVueData(vue);
    setJavascriptData(javascript);
    setJavaData(java);
  }, []);

  const titleSort = (data) => {
    return [...data].sort((a,b)=>{
      if(a.title > b.title) return 1;
      if(a.title < b.title) return -1;
      return 0;
    });
  };

  const titleSortStart = () => {
    const sortedReact = titleSort(reactData);
    const sortedVue = titleSort(vueData);
    const sortedJavascript = titleSort(javascriptData);
    const sortedJava = titleSort(javaData);
  
    setReactData(sortedReact);
    setVueData(sortedVue);
    setJavascriptData(sortedJavascript);
    setJavaData(sortedJava);
  };
  
  const baseSort = () => {
    setReactData(react);
    setVueData(vue);
    setJavascriptData(javascript);
    setJavaData(java);
  }

  return (
    <div className="container-md mt-5 mb-5">
      <h2 className="mt-6 text-center">
        <u>My Portfolios</u>
      </h2>
      <h4 className='text-center'><a href="https://github.com/yar0103/" class="link-success">
      <i class="bi bi-github" style={{fontSize: 30}}></i> 깃허브 바로가기</a></h4>

      {/* tab category */}
      <div class="nav nav-tabs mt-5" id="nav-tab" role="tablist">
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

      <div className='sort mt-4'>
        <button type="button" class="btn btn-warning" onClick={titleSortStart}>가나다순</button>
        <button type="button" class="btn btn-warning ms-2" onClick={baseSort}>되돌리기</button>
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
            {reactData.map((r,i) => <ProjectCard key={i} item={r} />)}
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
            {vueData.map((v, i) => <ProjectCard key={i} item={v} />)}
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
            {javascriptData.map((js, i) => <ProjectCard key={i} item={js} />)}
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
            {javaData.map((jv, i) => <ProjectCard key={i} item={jv} />)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
