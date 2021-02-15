import './main.css';
import { useEffect } from 'react';
import ActionGolf from '../components/Main/ActionGolf';
import backgroundBanner from '../assets/background/bg-md.png';

function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window; // 976
  return top > innerHeight + (triggerDiff || 0);
}

const ScrollEvent = () => {
  useEffect(() => {
    function handleScroll() {
      // == componentDidMount: return->DOM update(Mount)->read
      const elemsX = document.querySelectorAll('.up-on-scroll__x-left');
      elemsX.forEach((elem) => {
        console.log(elem);
        // 스크롤 내릴수록 top은 작아짐
        if (isElementUnderBottom(elem, -300)) {
          // top > innerHeight(976)-20 == 스크린 아래
          elem.style.opacity = '0';
          elem.style.transform = 'translateX(-70px)';
        } else {
          // top < innerHeight(976)-20 == 스크린 위
          elem.style.opacity = '1';
          elem.style.transform = 'translateX(0px)';
        }
      });

      const elemsY = document.querySelectorAll('.up-on-scroll__y-right');
      elemsY.forEach((elem) => {
        console.log(elem);
        // 스크롤 내릴수록 top은 작아짐
        if (isElementUnderBottom(elem, -300)) {
          // top > innerHeight(976)-20 == 스크린 아래
          elem.style.opacity = '0';
          elem.style.transform = 'translate(70px, 70px)';
        } else {
          // top < innerHeight(976)-20 == 스크린 위
          elem.style.opacity = '1';
          elem.style.transform = 'translate(0px, 0px)';
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
  });
};

const Main = () => {
  ScrollEvent();

  return (
    <main className="App-main">
      <ActionGolf></ActionGolf>
      <div className="main__ar-board-game">ar 승람도</div>
      <div className="main__hologram">홀로그램, vr, ar</div>
      <div className="main__business">
        <img src={backgroundBanner} alt="background-banner" />
      </div>
      <div className="main__purple-payment">퍼플 페이먼트</div>
      <div className="main__purple-card">보라빛 퍼플카드</div>
      <div className="main__banco-chain">뱅코체인</div>
      <div className="main__edu-block">에듀블록</div>
    </main>
  );
};
export default Main;
