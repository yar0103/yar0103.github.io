import IntroductionCard from './IntroductionCard';

const Introduction = ({theme}) => {
  return (
    <div className="container-md mt-4 text-center">
        <div className="row ">
          <h2 className="mt-4 mb-4" id={theme ? 'dark-mode' : 'light-mode'}>
            <u>Introduction Yu A Rin</u>
          </h2>
          <IntroductionCard />
        </div>
      </div>
  )
}

export default Introduction;