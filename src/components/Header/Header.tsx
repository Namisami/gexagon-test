import Button from '@components/Button/Button';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <nav className="header__nav nav">
        <ul className='nav__list'>
          <li className='nav__item'>
            <Button>Зарегистрироваться</Button>
          </li>
          <li className='nav__item'>
            <Button>Войти</Button>
          </li>
          <li className='nav__item'>
            <Button>Администрирование</Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
