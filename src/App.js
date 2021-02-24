import { useEffect } from 'react';
import Header from './components/Header';
import InitCarousel from './components/Main/Carousel';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

// 방법1
// export const App = () => {
const App = () => {
  return (
    <div className="App">
      <Header />
      <InitCarousel />
      <Main />
      <Footer />
    </div>
  );
};

// 방법2
export default App;
