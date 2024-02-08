
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact';
import Feedback from './Pages/Feedback';
import Fragment from './Pages/Fragment';
import Clipboard from './Pages/Clipboard';
function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Contact/>
      <Feedback/>
      <Fragment/>
      <Clipboard/>
    </div>
  );
}

export default App;
