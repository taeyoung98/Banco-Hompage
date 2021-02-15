import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import InitCarousel from './components/Main/Carousel';

// 방법1
// export const App = () => {
const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <InitCarousel></InitCarousel>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

// 방법2
export default App;
