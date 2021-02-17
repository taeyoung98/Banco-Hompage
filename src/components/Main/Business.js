import './business.css';
import businessImg from '../../assets/background/bg-md.png';

const Business = () => {
  return (
    <div className="main__business">
      <img className="business__image-box" src={businessImg} alt="business" />
      <div className="business__text-box-container">
        <div className="business__text-box-inside">
          <img
            className="up-on-scroll__y-bottom business__wordmark"
            src="https://www.banco.id/res/img/banco_logo_white.png"
            alt="main__logo__wordmark"
          />
          <p className="up-on-scroll__y-bottom  business__title">
            게임, 결제, 엔터테인먼트, 교육, 블록체인 등
            <br />
            IT 기반의 다양한 사업분야에 진출, 성장해 나가고 있는 기업입니다.
          </p>
          <img
            className="up-on-scroll__y-bottom business__symbol"
            src="https://www.banco.id/res/img/logo_banco-white.png"
            alt="main__logo__symbol"
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
