import { useState } from 'react';
import { introCardItem } from '../data';

const IntroductionCard = () => {
  const [introCards] = useState(introCardItem);

  return (
    <>
      {
        introCards.map((item, i) => {
          return (
            <div className="col-sm-6 col-xl-3 mt-4 mb-sm-0 " key={i}>
              <div className="card text-bg-dark" >
                <img src={item.image} className="card-img" alt="..." />
                <div className="card-img-overlay ">
                  <p className="card-title fs-4">{item.title}</p>
                  <p className="card-text">
                    {item.content}
                  </p>
                  <p className="card-text">
                    <small>{item.en}</small>
                  </p>
                </div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default IntroductionCard;