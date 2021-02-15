import './header.css';

const Header = () => {
  return (
    <header className="App-header">
      <div className="navigation">
        <div className="navigation__business">BUSINESS</div>
        <div className="navigation__logo">
          <img src="https://www.banco.id/res/img/fb_CI_W.png" />
        </div>
        <div className="navigation__banco">BANCO</div>
      </div>
    </header>
  );
};

export default Header;
