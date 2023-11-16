import {Link} from 'react-router-dom';
function FooterHospital(){
    return (
         <div>
<footer class="px-3 pt-4 lg:px-9 border-t-2 bg-amber-900">
    <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div class="sm:col-span-2">
            <Link to="#" class="inline-flex items-center">
                <img src="logo.png" alt="logo.gif" class="h-8 w-8"/>
                <span class="ml-2 text-xl font-bold tracking-wide text-white">Remedial Center Hospital</span>
            </Link>
            <div class="mt-6 lg:max-w-xl">
                <p class="text-sm text-white">
                ADDRESS:D-9, BLOCK-I, NORTH NAZIMABAD, KARACHI, PAKISTAN-74700. 
                <br/>PHONE:+92 21-36633834 - 5 - 6 
                <br/>Fax: +92 21-36638189
                <br/>EMAIL: info@remedialcentre.com
                </p>
            </div>
        </div>

        <div class="flex flex-col gap-2 text-sm">
            <p class="text-base font-bold tracking-wide text-white">Popular Links</p>
            <Link to="#" className="text-white">Become a RC members</Link>
            <Link to="#" className="text-white">Health Clinic</Link>
            <Link to ="#" className="text-white">Panel List</Link>
            <Link to ="#" className="text-white">Health Advice</Link> 

            <Link to ="#" className="text-white">Training and Development </Link>
            <Link to = "#" className="text-white">Photo Gallery</Link>      
            <p class="text-base font-bold tracking-wide text-white">Link</p>
            <Link to ="#" className="text-white">E-Pharmacy</Link>
            <Link to ="#" className="text-white"></Link>
            <Link to ="#" className="text-white"></Link>
        </div>

        <div>
            <p class="text-base font-bold tracking-wide text-white">COMPANY IS ALSO AVAILABLE ON</p>
            <div class="flex items-center gap-1 px-2">
                <Link to = "#" class="w-full min-w-xl">
                    <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                        class="h-10"/>
                </Link>
                <Link class="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                    <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button"
                        class="h-28"/>
                </Link>
            </div>
            <p class="text-base font-bold tracking-wide text-white">Contacts</p>
            <div class="flex">
                <p class="mr-1 text-white">Email:</p>
                <Link href="#" title="send email" class="text-white">info@remedialcentre.com</Link>
            </div>
        </div>

    </div>

    <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p class="text-sm text-white">© Copyright 2023 Company. All rights reserved.</p>
        <ul class="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <Link to="#"
                    class="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                    &amp; Cookies Policy
                </Link>
            </li>
            <li>
                <Link to="#"
                    class="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                </Link>
            </li>
        </ul>
    </div>

</footer>
</div>
)
}
export default FooterHospital;