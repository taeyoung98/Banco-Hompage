import bancoLogoImg from '../../assets/items/banco-logo.png';
import hologramImg from '../../assets/items/s3-p1.png';

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
          <h3 className="up-on-scroll__x-left hologram__title"></h3>
          <p className="up-on-scroll__x-left"></p>
        </div>
      </div>
      <div className="hologram__image-box">
        <img
          className="up-on-scroll__y-right"
          src={hologramImg}
          alt="hologram"
        />
      </div>
    </div>
  );
};

export default Hologram;
