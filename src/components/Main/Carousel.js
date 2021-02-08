import { Carousel } from 'antd';
import background1 from "../../assets/background/bg1.png";
import background2 from "../../assets/background/bg2.png";
import background3 from "../../assets/background/bg3.png";

function InitCarousel() {
    return (
        <div className="main__">
          <Carousel autoplay>
            <div>
              <img src={background1} alt="background1" />
            </div>
            <img src={background2} alt="background2" />
            <img src={background3} alt="background3" />
          </Carousel>
        </div>
    )
}

export default InitCarousel;