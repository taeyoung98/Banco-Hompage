import bancoLogoImg from '../../assets/items/banco-logo.png';
import bancoChainImg from '../../assets/items/s6-p1.png';
import './bancoChain.css';

const BancoChain = () => {
  return (
    <div className="main__banco-chain">
      <div className="banco-chain__image-box">
        <img
          className="up-on-scroll__y"
          src={bancoChainImg}
          alt="banco-chain"
        />
      </div>
      <div className="banco-chain__empty-box" />
      <div className="banco-chain__text-box">
        <div className="banco-chain__text-box-inside">
          <img
            className="up-on-scroll__x-right"
            src={bancoLogoImg}
            alt="main__logo"
          />
          <h3 className="up-on-scroll__x-right banco-chain__title">
            뱅코체인
            <br />
            BANCO CHAIN
          </h3>
          <p className="up-on-scroll__x-right banco-chain__description">
            비트코인의 블록체인을 기반으로 제작된 뱅코체인입니다.
            <br /> 원천기술 보유로 인한
            <br />
            다양한 플랫폼에 최적화가 가능합니다.
            <br />
            * 뱅코체인을 이용한 개발도상국
            <br />
            &nbsp;&nbsp;&nbsp;공공업무를 위한 블록체인
            <br />* 인공지능을 이용한 암호화폐 분석 및 지표수립
          </p>
        </div>
      </div>
    </div>
  );
};

export default BancoChain;
