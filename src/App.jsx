import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import PageNotFound from "./Routes/PageNotFound";
import { routes } from "./utils/routes";



function App() {
  return (
      <div className="App">
          <Navbar/>
         
          <Routes>
            <>
            <Route path='/' element ={<Home/>}></Route>
            <Route path= {routes.contact} element={<Contact/>}></Route>
            <Route path={routes.detail} element ={<Detail/>}></Route>
            <Route path={routes.favs} element ={<Favs/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
            </>
          </Routes>
         
          <Footer/>
      </div>
  );
}
export default App
