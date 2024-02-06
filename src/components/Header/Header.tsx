import Button from '@components/Button/Button';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <nav className="header__nav nav">
        <ul className='nav__list'>
          <li className='nav__item'>
            <Button>
              <Link to='/signup'>
                Зарегистрироваться
              </Link>
            </Button>
          </li>
          <li className='nav__item'>
            <Button>
              <Link to='/login'>
                Войти
              </Link>
            </Button>
          </li>
          <li className='nav__item'>
            <Button>
              <Link to='/main'>
                Администрирование
              </Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
