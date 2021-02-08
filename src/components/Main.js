import "./Main.css";
import InitCarousel from "../components/Main/Carousel";


function Main() {
    return( 
      <main className="App-main">

        <InitCarousel></InitCarousel>

        <div className="main__acton-golf">action golf</div>
        <div className="main__ar-board-game">ar 승람도</div>
        <div className="main__hologram">홀로그램, vr, ar</div>
        <div className="main__business">배너</div>
        <div className="main__purple-payment">퍼플 페이먼트</div>
        <div className="main__purple-card">보라빛 퍼플카드</div>
        <div className="main__banco-chain">뱅코체인</div>
        <div className="main__edu-block">에듀블록</div>
      </main>
    )
}

export default Main;