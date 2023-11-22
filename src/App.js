import './App.css';
import TrainingAndDevelopment from './Pages/TrainingAndDevelopment';
import FooterHospital from './component/FooterHospital';
import MainNavBar from './component/MainNavBar';
import FAQ from './Pages/FAQ';
import RCmember from './Pages/RCmember'
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import AddFacility from './Pages/AddFacility';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ContactUs from './Pages/ContactUs';
import Inquiry from './Pages/Inquiry';
import AddFAQ from './Pages/AddFAQ';
import {HelmetProvider} from 'react-helmet-async';
import PhotoGallery from './Pages/PhotoGallery';
import EPharmacy from './Pages/E-Pharmacy';
import AddTraininganddevelopment from './Pages/Add_Training_and_development';
import HealthClinic from './Pages/HealthClinic';
import AboutUs from './Pages/AboutUs';
import OurManagementTeam from './Pages/OurManagementTeam';
import Facilites from './Pages/Facilities';
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
          <MainNavBar/>
          <Routes>
          <Route path = "/OurTeam" element={<OurManagementTeam/>}/>
          <Route path = "*" element = {<NoPage/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path = "/" element={<Home/>}/>
          <Route path = '/RC_member' element={<RCmember/>}/>
          <Route path = "/contactUs" element={<ContactUs/>}/>  
          <Route path ="/inquiry" element={<Inquiry/>}/>  
          <Route path='/FAQ' element={<FAQ/>}/>      
          <Route path = "/AddFAQ" element={<AddFAQ/>}/>
          <Route path='/PhotoGallery' element={<PhotoGallery/>}/>
          <Route path='/epharmacy' element={<EPharmacy/>}/>
          <Route path='/Training_and_development' element = {<TrainingAndDevelopment/>}/>
          <Route path='/addtraininganddevelopment' element ={<AddTraininganddevelopment/>} /> 
          <Route path='/RC_Member' element={<RCmember/>}/>
          <Route path = "/Health_Clinic" element={<HealthClinic/>}/>
          <Route path = '/facilities' element={<Facilites/>}/>
          <Route path='/AddFacility' element={<AddFacility/>}/>
        </Routes>
          <FooterHospital/>
        </BrowserRouter>
        </HelmetProvider>    
  );
}

export default App;
