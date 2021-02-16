import seungramdoImg from '../../assets/items/s2-p1.png';
import bancoLogoImg from '../../assets/items/banco_logo.png';
import './seungramdo.css';

const Seungramdo = () => {
  return (
    <div className="main__seungramdo">
      <div className="seungramdo__image-box">
        <img
          className="up-on-scroll__y-left"
          src={seungramdoImg}
          alt="seungramdo"
        />
      </div>
      <div className="seungramdo__text-box">
        <div className="seungramdo__text-box-inside">
          <img
            className="up-on-scroll__x-right"
            src={bancoLogoImg}
            alt="main__logo"
          />
          <h3 className="up-on-scroll__x-right seungramdo__title">AR 승람도</h3>
          <p className="up-on-scroll__x-right">
            AR기술을 보드게임에 접목하여
            <br />
            조선시대 선조들이 실제 즐겼던 승람도를 재현한 게임
            <br />
            조선시대 ‘승경도’라는 게임의 기반에 전국을 유람하며
            <br />
            풍류를 즐기는 요소를 가미하여 탄생한 게임이 ‘승람도’입니다.
            <br />
            <br />
            이러한 우리 선조들이 즐겼던 보드게임을
            <br />
            현대 기술인 AR기술을 도입해 즐길 수 있도록 제작 되었습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Seungramdo;
