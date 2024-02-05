import './WelcomePage.css';

const WelcomePage = () => {
  return (
    <div className='welcome-page'>
      <h1 className="welcome-page__title">Описание</h1>
      <p className="welcome-page__description">
        Это приветственная страница.<br />
        Сверху находится меню, позволяющее взаимодействовать с сайтом.
      </p>
    </div>
  )
}

export default WelcomePage;
