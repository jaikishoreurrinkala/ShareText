import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home.js';
import Next from './pages/contentPage.js';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/next' element={<Next/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
