import TopNavBarHospital from './TopNavbarHospital';
import Navbar from './Navbar';
import NavbarItem from './NavBarItem';
import LogoNavBar from './LogoNavBar';
function NavigationBar(){
    return (
    <div>
        <TopNavBarHospital/>
        <Navbar/>
        <LogoNavBar/>
        <NavbarItem/>
    </div>
    )
}
export default NavigationBar;