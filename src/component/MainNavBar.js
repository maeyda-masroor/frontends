
import { useLocation } from 'react-router-dom';
import PharmacyNavbar from './PharmacyNavbar';
import HospitalNavbar from './HospitalNavbar';
function MainNavigationbar() {
   const location = useLocation();
   if(location.pathname==='/epharmacy' || location.pathname==='/aboutpharmacy' || location.pathname==='/homepharmacy'){
      return(
            <PharmacyNavbar/>
      )}
   else{
      return (
            <HospitalNavbar/>
      )
   }
}

export default MainNavigationbar;