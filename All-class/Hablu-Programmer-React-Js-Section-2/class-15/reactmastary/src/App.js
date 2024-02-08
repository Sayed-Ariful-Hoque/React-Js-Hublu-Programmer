
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
function App() {
  return (
    <div className="App">
      <div className='css_all'>
      <Home/>
      <About/>
      <Contact/>
      <Feedback/>
      <Fragment/>
      <Clipboard/>
      <Focus />
      <KeyboardEvents/>
      <WelcomeAdminFanel/>
      <InlineStyle/>
      </div>
    </div>
  );
}

export default App;
