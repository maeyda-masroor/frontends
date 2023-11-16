import './App.css';
import FooterHospital from './component/FooterHospital';
import MainNavBar from './component/MainNavBar';
import FAQ from './Pages/FAQ';
import Home from './Pages/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
          <MainNavBar/>
          <Routes>
          <Route path = "/FAQ" element={<FAQ/>}/>
          <Route path = "/" element={<Home/>}/>
          </Routes>
          <FooterHospital/>
        </BrowserRouter>    
  );
}

export default App;
