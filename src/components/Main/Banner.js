import bannerBackground from '../../assets/background/bg-md.png';
import bancoLogo2 from '../../assets/items/banco-logo2.png';
import bancoLogo3 from '../../assets/items/banco-logo3.png';
import './banner.css';

const Banner = () => {
  return (
    <div className="main__banner">
      <img
        className="banner__background"
        src={bannerBackground}
        alt="banner__background"
      />
      <div className="banner__text-box-container">
        <div className="banner__text-box-inside">
          <img
            className="up-on-scroll__y banner__wordmark"
            src={bancoLogo2}
            alt="banner__wordmark"
          />
          <p className="up-on-scroll__y banner__title">
            게임, 결제, 엔터테인먼트, 교육, 블록체인 등
            <br />
            IT기반의 다양한 사업분야에 진출, 성장해 나가고 있는 기업입니다.
          </p>
          <img
            className="up-on-scroll__y banner__symbol"
            src={bancoLogo3}
            alt="banner__symbol"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
