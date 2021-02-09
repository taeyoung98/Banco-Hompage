import { Header } from "./components/Header"
import { InitCarousel } from "./components/Main/Carousel";
import Main from "./components/Main"
import { Footer } from "./components/Footer"
import "./App.css"

export const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <InitCarousel></InitCarousel>
      <Main></Main>
      <Footer></Footer> 
    </div>
  );
}
