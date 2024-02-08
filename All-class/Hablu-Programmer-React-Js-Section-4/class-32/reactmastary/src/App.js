
import './App.css';
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact';
// import Feedback from './Pages/Feedback';
// import Fragment from './Pages/Fragment';
// import Clipboard from './Pages/Clipboard';
// import Focus from './Pages/Focus';
// import KeyboardEvents from './Pages/KeyboardEvents';
// import WelcomeAdminFanel from './Pages/WelcomeAdminFanel';
// import InlineStyle from './Pages/InlineStyle';
// import Style from './Pages/Style';
// import ReactBootstrap from './Pages/ReactBootstrap';
// import Input from './Pages/Input';
// import ControlledCompenet from './Pages/ControlledCompenet';
// import Expressions from './Pages/Expressions';
import Navbare from './Pages/BlogWebsit/Navbare';
import Carousel from './Pages/BlogWebsit/Carousel';
import Card from './Pages/BlogWebsit/Card';
import "./Pages/BlogWebsit/card.css"
function App() {
  return (
    <div className="App">
      {/* <div className='container'> */}
      {/* <Home/>
      <About/>
      <Contact/>
      <Feedback/>
      <Fragment/>
      <Clipboard/>
      <Focus />
      <KeyboardEvents/>
      <WelcomeAdminFanel/>
      <InlineStyle/>
      <Style/>
      <ReactBootstrap/>
      <Input/>
      <ControlledCompenet/>
      <Expressions/> */}
      <Navbare />
      <Carousel />
      <div className='container mb-5 '>
        <div className='row'>
          <div className='col-md-3  card-responsive'>
          <Card img="imgs/card-1.webp" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
          <Card img="imgs/card-2.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
          <Card img="imgs/card-3.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
          <Card img="imgs/card-4.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
          <Card img="imgs/card-5.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
          <Card img="imgs/card-3.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
          <Card img="imgs/card-4.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
          <div className='col-md-3 card-responsive'>
          <Card img="imgs/card-5.jpg" title="Programing" pragrap="Some quick example text to build on the card title and make up the bulk of the card's content." button="submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
