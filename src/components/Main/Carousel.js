import { Carousel } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bancoLogoWhite from '../../assets/items/banco-logo_white.png';
import bancoLogo3 from '../../assets/items/banco-logo3.png';
import './carousel.css';

const InitCarousel = () => {
  AOS.init();

  return (
    <div className="main__carousel">
      <Carousel autoplay infinite draggable={true} autoplaySpeed={13000}>
        {/* Slide 1 */}
        <div className="carousel__slide-1">
          <div className="carousel__text-box">
            <div className="carousel__text-box-inside">
              <img
                src={bancoLogoWhite}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-out-back"
              />
              <h2
                className="carousel__title-eng"
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-easing="ease-out-back"
              ></h2>
              <h2
                className="carousel__title-kor"
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-easing="ease-out-back"
              >
                기술과 융합으로 새로운 가치를 창조하는 기업
              </h2>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel__slide-2">
          <div className="carousel__text-box">
            <div className="carousel__text-box-inside">
              <img src={bancoLogo3} />
              <h2 className="carousel__title-eng">액션골프 ActionGolf</h2>
              <h2 className="carousel__title-kor">
                센서 부착 골프 스틱을 스마트폰과 연동하여
                <br />
                스윙속도와 궤적을 분석인지해 플레이하는 인터랙티브 골프게임
              </h2>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel__slide-3">
          <div className="carousel__text-box">
            <div className="carousel__text-box-inside">
              <img src={bancoLogo3} />
              <h2 className="carousel__title-eng">
                홀로그램 인터랙션
                <br />
                HOLOGRAM INTERACTION
              </h2>
              <h2 className="carousel__title-kor">
                홀로그램을 통한 엔터테인먼트 산업 간의 경계를 허무는
                <br />
                인터랙션 뱅코가 열어갑니다.
              </h2>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default InitCarousel;
