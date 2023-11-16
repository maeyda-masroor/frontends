import './App.css';
import FooterHospital from './component/FooterHospital';
import MainNavBar from './component/MainNavBar';
import AboutUs from './Pages/AboutUs';
import RCmember from './Pages/RCmember'
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ContactUs from './Pages/ContactUs';
function App() {
  return (
      <BrowserRouter>
          <MainNavBar/>
          <Routes>
          <Route path = "*" element = {<NoPage/>}/>
          <Route path = "/" element={<Home/>}/>
          <Route path = '/RC_member' element={<RCmember/>}/>
          <Route path = "/contactUs" element={<ContactUs/>}/>          
          </Routes>
          <FooterHospital/>
        </BrowserRouter>    
  );
}

export default App;
