
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Feedback from './Pages/Feedback';
import Fragment from './Pages/Fragment';
import Clipboard from './Pages/Clipboard';
import Focus from './Pages/Focus';
import KeyboardEvents from './Pages/KeyboardEvents';
import WelcomeAdminFanel from './Pages/WelcomeAdminFanel';
import InlineStyle from './Pages/InlineStyle';
import Style from './Pages/Style';
import ReactBootstrap from './Pages/ReactBootstrap';
import Input from './Pages/Input';
import ControlledCompenet from './Pages/ControlledCompenet';
import Expressions from './Pages/Expressions';
function App() {
  return (
    <div className="App">
      <div className='container'>
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
      <ControlledCompenet/> */}
      <Expressions/>
      </div>
    </div>
  );
}

export default App;
