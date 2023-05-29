import "./App.css";
import Contact from "./Pages/Contact";
import Documentation from "./Pages/Documentation";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import Segment from "./Pages/Segment";
import Yolo5 from "./Pages/Yolo5";

import{  BrowserRouter, Routes,Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='Home' element={<Home/>} />
      <Route path='Segment' element={<Segment/>} />
      <Route path='YOLO5' element={<Yolo5/>} />
      <Route path='Documentarion' element={<Documentation/>} />
      <Route path='Contact' element={<Contact/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
