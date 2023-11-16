import {Link} from 'react-router-dom';
function Navbar(){

    return (
    <div className="bg-amber-100 h-10 w-full">
<ul class="flex flex-wrap items-center justify-center text-black dark:text-black">
    <li>
        <Link to="#" class="me-4 hover:underline md:me-6 ">In Urdu </Link>
    </li>
    <li>
        <Link to="#" class="me-4 hover:underline md:me-6">Print Page</Link>
    </li>
    <li>
        <Link to="#" class="me-4 hover:underline md:me-6 ">Site Map</Link>
    </li>
    <li>
        <Link to ="#" class="me-4 hover:underline md:me-6">Help</Link>
    </li>
</ul>
    </div>
    )
    
}
export default Navbar;