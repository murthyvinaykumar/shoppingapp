import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Header from './CommonComponents/Header/Header';
import Footer from './CommonComponents/Footer/Footer';
import Routes from './Router/Routes';
import ShopDemoCategory from './CommonComponents/ItemCategory/ShopDemoCategory';
import Button from './CommonComponents/CarouselConatiner/CategoryButton/Button';
import CategoryWrapper from './CommonComponents/CategoryWrapper/CategoryWrapper';
import CarouselContainer from './CommonComponents/CarouselConatiner/CarouselContainer';
import DownCarousel from '/home/prashant/shoppingapp/src/CommonComponents/CarouselConatiner/DownCarousel';
import SaleDetails from '/home/prashant/shoppingapp/src/CommonComponents/CarouselConatiner/SaleDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <CarouselContainer/>
      <CategoryWrapper />
			<SaleDetails/>
			<DownCarousel/>
      <Footer />
    </div>
  );
}

export default App;
