import purplePaymentImg1 from '../../assets/items/s4-p1.png';
import purplePaymentImg2 from '../../assets/items/s4-p2.png';
import './purplePayment.css';

const PurplePayment = () => {
  return (
    <div className="main__purple-payment">
      <div className="purple-payment__text-box">
        <div className="purple-payment__text-box-inside">
          <h3 className="up-on-scroll__x-left purple-payment__title">
            퍼플 페이먼트
            <br />
            Purple Payment
          </h3>
          <div className="up-on-scroll__x-left purple-payment__description">
            <div className="purple-payment__description__contents">
              코인 간 특성, 트랜젝션 타임과 관계없이 즉시 체결가능합니다.
              <br />
              고객사의 요청에 맞게 카드 제작,
              <br />
              도입 즉시 가맹점 코인으로 결제가 가능합니다.
            </div>
            <div className="purple-payment__description__title">
              <p>
                크립토
                <br />
                결제 시스템
              </p>
              <div className="purple-payment__description__title__time">
                <div>체결시간</div>
                <div>약 0.1 초</div>
              </div>
            </div>
          </div>
          <a
            href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%EB%B1%85%EC%BD%94"
            target="_blank"
          >
            <div className="up-on-scroll__x-left purple-payment__button">
              <span>자세히보기</span>
              <span className="arrow"></span>
            </div>
          </a>
        </div>
      </div>
      <div className="purple-payment__image-box">
        <img
          className="up-on-scroll__y purple-payment__feature"
          src={purplePaymentImg1}
          alt="purple-payment-1"
        />
        <img
          className="up-on-scroll__y-right purple-payment__machine"
          src={purplePaymentImg2}
          alt="purple-payment-2"
        />
      </div>
    </div>
  );
};

export default PurplePayment;
