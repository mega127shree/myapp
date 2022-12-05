//import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  /*let title='welcome to javascript';
  const t="hello";
  let link="https:www.google.com";*/
  return (
    <div className="App">
     <Navbar/>
    <div className="content">
      <Home/>
    </div>
    </div>
  );
}

export default App;
