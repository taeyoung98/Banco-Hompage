import './main.css';
import { useEffect } from 'react';
import ActionGolf from './Main/ActionGolf';
import Seungramdo from './Main/Seungramdo';
import Hologram from './Main/Hologram';
import PurpleCard from './Main/PurpleCard';
import EduBlock from './Main/EduBlock';
import Business from './Main/Business';

function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  // console.log(
  //   `top: ${top} > innerHeight+triggerDiff: ${
  //     innerHeight + (triggerDiff || 0)
  //   } => T/F ${top > innerHeight + (triggerDiff || 0)}`
  // );
  return top > innerHeight + (triggerDiff || 0);
}

const ScrollEvent = () => {
  useEffect(() => {
    const handleScroll = () => {
      // 왼쪽
      const elemsXleft = document.querySelectorAll('.up-on-scroll__x-left');
      // console.log(elemsXleft);
      elemsXleft.forEach((elem) => {
        // console.log(elem);
        if (isElementUnderBottom(elem, -100)) {
          //true = 스크린 아래
          elem.style.opacity = '0';
          elem.style.transform = 'translateX(-70px)';
        } else {
          //false = 스크린 위
          elem.style.opacity = '1';
          elem.style.transform = 'translateX(0px)';
        }
      });

      // 오른쪽
      const elemsXright = document.querySelectorAll('.up-on-scroll__x-right');
      // console.log(elemsXright);
      elemsXright.forEach((elem) => {
        // console.log(elem);
        if (isElementUnderBottom(elem, -100)) {
          //true = 스크린 아래
          elem.style.opacity = '0';
          elem.style.transform = 'translateX(70px)';
        } else {
          //false = 스크린 위
          elem.style.opacity = '1';
          elem.style.transform = 'translateX(0px)';
        }
      });

      // 아래
      const elemsYbottom = document.querySelectorAll('.up-on-scroll__y-bottom');
      elemsYbottom.forEach((elem) => {
        console.log(elem);
        if (isElementUnderBottom(elem, -100)) {
          //true = 스크린 아래
          elem.style.opacity = '0';
          elem.style.transform = 'translateY(100px)';
        } else {
          //false = 스크린 위
          elem.style.opacity = '1';
          elem.style.transform = 'translateY(0px)';
        }
      });

      // 대각선 아래 오른쪽
      const elemsYright = document.querySelectorAll('.up-on-scroll__y-right');
      // console.log(elemsYright);
      elemsYright.forEach((elem) => {
        // console.log(elem);
        if (isElementUnderBottom(elem, -100)) {
          //true = 스크린 아래
          elem.style.opacity = '0';
          elem.style.transform = 'translate(70px, 70px)';
        } else {
          //false = 스크린 위
          elem.style.opacity = '1';
          elem.style.transform = 'translate(0px, 0px)';
        }
      });

      // 대각선 아래 왼쪽
      const elemsYleft = document.querySelectorAll('.up-on-scroll__y-left');
      // console.log(elemsYleft);
      elemsYleft.forEach((elem) => {
        // console.log(elem);
        if (isElementUnderBottom(elem, -100)) {
          //true = 스크린 아래
          elem.style.opacity = '0';
          elem.style.transform = 'translate(-70px, 70px)';
        } else {
          //false = 스크린 위
          elem.style.opacity = '1';
          elem.style.transform = 'translate(0px, 0px)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
  });
};

const Main = () => {
  ScrollEvent();

  return (
    <main className="App-main">
      <ActionGolf></ActionGolf>
      <Seungramdo></Seungramdo>
      <Hologram></Hologram>
      <Business></Business>

      <div className="main__purple-payment">퍼플 페이먼트</div>
      <div></div>
      <PurpleCard></PurpleCard>
      <div className="main__banco-chain">뱅코체인</div>
      <EduBlock></EduBlock>
    </main>
  );
};

export default Main;
