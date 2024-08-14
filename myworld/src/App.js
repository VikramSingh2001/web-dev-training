import './App.css';
import { BrowserRouter, Route, Routes, Link, Router } from 'react-router-dom';
import Url from './mycomponent/Url';
function App() {
  return (
    <div>
      {/* <BrowserRouter><Routes><Router><Route></Route></Router></Routes></BrowserRouter> */}
      <BrowserRouter>
      <Routes>
        <Route path='/url' Component={<Url />} />
      </Routes>
      </BrowserRouter>
      <Link to="./mycomponent/Url">click</Link>
    </div>

  );
}
export default App;