import { Link } from "react-router-dom";
function Navbar(){

    return (
    <div className="bg-orange-900 h-10 w-full">
<ul class="flex flex-wrap items-center justify-center text-black dark:text-white">
    <li>
        <Link to="/" class="me-4 hover:underline md:me-6 ">Home </Link>
    </li>
    <li>
        <Link to ="#" class="me-4 hover:underline md:me-6">About Us</Link>
    </li>
    <li>
        <Link to ="#" class="me-4 hover:underline md:me-6 ">Facilities</Link>
    </li>
    <li>
        <Link to ="#" class="me-4 hover:underline md:me-6">CME</Link>
    </li>
    <li>
        <Link to ="#" class="me-4 hover:underline md:me-6">Consultants</Link>
    </li>
    <li>
        <Link to ="#" class="me-4 hover:underline md:me-6 ">Inquiry</Link>
    </li>
    <li>
        <Link to ="#" class="me-4 hover:underline md:me-6">Contact</Link>
    </li>
</ul>
    </div>
    )
    
}
export default Navbar;