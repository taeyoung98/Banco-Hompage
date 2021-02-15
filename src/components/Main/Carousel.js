import { Carousel, Button } from 'antd';
import background1 from '../../assets/background/bg1.png';
import background2 from '../../assets/background/bg2.png';
import background3 from '../../assets/background/bg3.png';
import './carousel.css';

const InitCarousel = () => {
  return (
    <div className="main__carousel">
      <Carousel autoplay>
        <img src={background1} alt="background1" />
        <img src={background2} alt="background2" />
        <img src={background3} alt="background3" />
      </Carousel>
    </div>
  );
};

export default InitCarousel;
