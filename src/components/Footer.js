import "./Footer.css";


function Footer() {
  return(
    <footer className="App-footer">
      <img src="https://www.banco.id/res/img/fb_CI_W.png" alt="banco"></img>
      <div className="footer__welcome">Welcome to BANCO</div>
      <div className="footer__info">
        <div>(주)뱅코</div>
        <div>본사 : 전라북도 전주시 덕진구 만성북로 21-26, 4층 1호</div>
        <div>연구소 : 서울특별시 강남구 도곡로 170 (대성빌딩) 4층</div>
        <div>Copyright ⓒ 2020 BANCO. Inc. All Rights Reserved.</div>
      </div>
    </footer>
    )
}

export default Footer;