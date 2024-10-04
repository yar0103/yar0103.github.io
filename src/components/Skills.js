import { useState } from 'react';
import { skills } from '../data';

const Skills = () => {
  const [skill, setSkill] = useState(skills);

  return (
    <div className="container-md mt-5 mb-5">
      <h2 className="mb-3 text-center">
        <u>Skill Level</u>
      </h2>
      <div class="row row-cols-1 row-cols-md-3 g-2 text-center">
        {skills.map((s, i) => {
          return (
            <div class="col" key={i}>
              <div class="card h-100">
                <img src={s.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{s.title}</h5>
                  <p class="card-text">숙련도 : {s.level}</p>
                </div>
              </div>
            </div>
          )
        })}

        {/* <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Skills;