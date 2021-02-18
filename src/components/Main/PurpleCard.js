import bancoLogoImg from '../../assets/items/banco-logo.png';
import purpleCardImg1 from '../../assets/items/s5-p1.png';
import purpleCardImg2 from '../../assets/items/s5-p2.png';
import './purpleCard.css';

const PurpleCard = () => {
  return (
    <div className="main__purple-card">
      <div className="purple-card__text-box">
        <div className="purple-card__text-box-inside">
          <img
            className="up-on-scroll__x-left"
            src={bancoLogoImg}
            alt="main__logo"
          />
          <h3 className="up-on-scroll__x-left purple-card__title">
            보라빛 퍼플카드
            <br />
            Purple Card
          </h3>
          <p className="up-on-scroll__x-left purple-card__description">
            NFC를 지원하며 IC칩을 내장한
            <br />
            카드형 하드웨어 콜드월렛입니다.
            <br />
            콜드월렛과 캐쉬풀 두가지 방식으로
            <br />
            보존하며 편리한 결제가 가능합니다.
            <br />
            온라인 쇼핑몰 및 오프라인 결제연동 됩니다.
          </p>
        </div>
      </div>
      <div className="purple-card__image-box">
        <img
          className="up-on-scroll__y-right purple-card__card"
          src={purpleCardImg1}
          alt="purple-card-1"
        />
        <img
          className="up-on-scroll__y-right purple-card__mobile"
          src={purpleCardImg2}
          alt="purple-card-2"
        />
      </div>
    </div>
  );
};

export default PurpleCard;
