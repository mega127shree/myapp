//import logo from './logo.svg';
//import './App.css';
import Navigationbar from './components/Navigationbar';
import './index.css';
// import Home from './Home';
import "./css/main.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import CarouselCom from './components/CarouselCom';
import Cards from './components/Cards';
import PickoftheWeek from './components/PickoftheWeek';
import Comments from './components/Comments';
function App() {
  /*let title='welcome to javascript';
  const t="hello";
  let link="https:www.google.com";*/
  return (
     <>
     <Navigationbar/>
     <CarouselCom/>
     <Cards/>
     <PickoftheWeek/>
     <Comments/>
     <div className="text-center my-3 text-primary small">
      Copyright 2022-2023
     </div>
     </>
     
  );
}

export default App;
