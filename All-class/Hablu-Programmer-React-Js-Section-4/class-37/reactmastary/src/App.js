
import './App.css';
import About from './Pages/BlogWebsit/About';
import Blog from './Pages/BlogWebsit/Blog';
import Contact from './Pages/BlogWebsit/Contact';
import Home from './Pages/BlogWebsit/Home';
import Sponsor from './Pages/BlogWebsit/Sponsor';
import "./Pages/BlogWebsit/card.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Blog' element={<Blog/>}></Route>
          <Route path='/Sponsor' element={<Sponsor/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='*' element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
