import bancoLogoImg from '../../assets/items/banco-logo.png';
import hologramImg from '../../assets/items/s3-p1.png';
import './hologram.css';

const Hologram = () => {
  return (
    <div className="main__hologram">
      <div className="hologram__text-box">
        <div className="hologram__text-box-inside">
          <img
            className="up-on-scroll__x-left"
            src={bancoLogoImg}
            alt="main__logo"
          />
          <h3 className="up-on-scroll__x-left hologram__title">
            홀로그램
            <br />
            HOLOGRAM, VR, AR
          </h3>
          <p className="up-on-scroll__x-left hologram__description">
            빛의 간접성을 이용해 입체정보를 기록하고,
            <br />
            복원을 통해 실제 사물과 동일한 3차원 입체효과를
            <br />
            제공하는 기술로 미래산업 전반에 이용이 가능한
            <br />
            핵심기술로 부상하고 있습니다.
          </p>
        </div>
      </div>
      <div className="hologram__image-box">
        <img className="up-on-scroll__y" src={hologramImg} alt="hologram" />
      </div>
    </div>
  );
};

export default Hologram;
