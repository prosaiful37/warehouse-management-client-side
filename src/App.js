import logo from './logo.svg';
import { Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './pages/Shared/NotFound/NotFound';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import About from './pages/About/About';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
