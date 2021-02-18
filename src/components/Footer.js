import bancoLogo2 from '../assets/items/banco-logo2.png';
import './footer.css';

const Footer = () => {
  return (
    <footer className="App-footer up-on-scroll__y">
      <img src={bancoLogo2} alt="footer__logo"></img>
      <div className="footer__welcome">Welcome to BANCO</div>
      <div className="footer__info">
        <p>
          (주)뱅코
          <br />
          본사 : 전라북도 전주시 덕진구 만성북로 21-26 401호
          <br />
          연구소 : 서울특별시 강남구 언주로94길 15 3층
          <br />
          Copyright ⓒ 2021 BANCO. Inc. All Rights Reserved.
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
