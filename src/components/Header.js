import './header.css';
import bancoLogo2 from '../assets/items/banco-logo2.png';

const Header = () => {
  return (
    <header className="App-header">
      <div className="navigation">
        <div className="navigation__business">
          <span>
            <a>BUSINESS</a>
          </span>
        </div>
        <div className="navigation__logo">
          <img src={bancoLogo2} />
        </div>
        <div className="navigation__banco">
          <span>
            <a>BANCO</a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
