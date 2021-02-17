import eduBlockImg from '../../assets/items/s7-p1.png';
import './eduBlock.css';

const EduBlock = () => {
  return (
    <div className="main__edu-block">
      <div className="edu-block__text-box">
        <div className="edu-block__text-box-inside">
          <img
            className="up-on-scroll__x-left"
            src="https://www.banco.id/res/img/banco_logo.png"
            alt="main__logo"
          />
          <h3 className="up-on-scroll__x-left edu-block__title">
            에듀블록
            <br />
            EDU-BLOCK
          </h3>
          <p className="up-on-scroll__x-left">
            뱅코체인을 기반으로한 자율 참여형 교육 플랫폼입니다.
            <br />
            공교육 강화와 사교육비 절감에 효율적인 플랫폼입니다.
          </p>
        </div>
      </div>
      <div className="edu-block__image-box">
        <img
          className="up-on-scroll__y-bottom edu-block__card"
          src={eduBlockImg}
          alt="edu-block"
        />
      </div>
    </div>
  );
};

export default EduBlock;
