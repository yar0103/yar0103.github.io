import IntroductionCard from './IntroductionCard';

const Introduction = ({ theme }) => {
  return (
    <div className="container-md text-center">
      <div className="row">
        <h2 className="mt-5 mb-3" id={theme ? 'dark-mode' : 'light-mode'}>
          <u>Introduction Yu A Rin</u>
        </h2>
        <div className='row mb-5'>
          <IntroductionCard />
        </div>
      </div>
    </div>
  )
}

export default Introduction;