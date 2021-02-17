import './footer.css';

const Footer = () => {
  return (
    <footer className="App-footer up-on-scroll__y-bottom">
      <img
        src="https://www.banco.id/res/img/fb_CI_W.png"
        alt="footer__logo"
      ></img>
      <div className="footer__welcome">Welcome to BANCO</div>
      <div className="footer__info">
        <p>
          (주)뱅코
          <br />
          본사 : 전라북도 전주시 덕진구 만성북로 21-26, 4층 1호
          <br />
          연구소 : 서울특별시 강남구 언주로94길 15 3층
          <br />
          Copyright ⓒ 2020 BANCO. Inc. All Rights Reserved.
          <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
