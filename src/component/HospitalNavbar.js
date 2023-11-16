import TopNavBarHospital from './TopNavbarHospital';
import Navbar from './Navbar';
import NavbarItem from './NavBarItem';
import LogoNavBar from './LogoNavBar';
import SectionIntro from './SectionIntro';
import FooterHospital from './FooterHospital';
function NavigationBar(){
    return (
    <div>
        <TopNavBarHospital/>
        <Navbar/>
        <LogoNavBar/>
        <NavbarItem/>
        <SectionIntro/>
        <FooterHospital/>
    </div>
    )
}
export default NavigationBar;