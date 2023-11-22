import { Link } from "react-router-dom";
function RC_member(){
 
                return ( 
                <div>
                <section class="text-amber-900 bg-white">
                    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="max-w-screen-lg text-amber-900 sm:text-lg dark:text-amber-900">
                    <h1 class="mb-4 text-9xl tracking-tight font-bold text-amber-900 dark:text-amber-900">Remedial Center Family Club</h1>
                    <p class="mb-4 font-medium">
                    Remedial Centre Hospital provides to its valued Clients and their family members membership of <span className="text-amber-900 font-extrabold font-xl">“Remedial Centre Family”</span> club. As a member of <span className="text-amber-900 font-extrabold">“Remedial Centre Family”</span> 
                    they are entitled to several benefits free of cost or at greatly discounted rates such as
                    </p>
                    <ul class="mb-4 font-bold list-disc">
                            <li>Fifteen percent (15%) discount on all Casualty RMO fees.</li>
                            <li>Upgrading of room from General ward to Private/semi-Private room if available.</li>
                            <li> Up to 15% discount on X-Rays and laboratory investigations.</li>
                            <li>Up to 5% discount on 24 hours Hospital Pharmacy.</li>
                            <li> Up to 25% discount on annual executive health screening.</li>
                            <li>Remedial newsletter by email.</li>
                            <li> Opportunities for volunteer work.</li>
                            <li> Priority appointments with foreign visiting specialists</li>
                            <li> Home health care.</li>
                            <li>Children entitled for 50% discount on school health program.</li>
                    </ul>
                    <h2 class="mb-4 text-4xl tracking-tight font-bold text-amber-900 dark:text-amber-900 font-extrabold">Document Required For Membership </h2>
                    <h3 className="mb-4 text-2xl text-amber-900">
                    Following documents are required:-
                    </h3>
                    <ol className="mb-4 font-bold list-decimal">
                        <li>Application form</li>
                        <li>Two passport size photographs</li>
                        <li>Copy of CNIC</li>
                        <li>Blood Group Report</li>
                    </ol>
                    <h2 className="mb-4 text-4xl font-bold text-amber-900">ELIGIBILITY</h2>
                    <p className="mb-4 text-2xl font-extrabold">All those patients who have been admitted in Hospital for treatment at least twice are eligible for membership. Copies of Hospital paid Bills are required.</p>
                    <p className="mb-4 text-2xl fomt-extrabold">To register as member of <span className="font-xl text-amber-900 font-extrabold">“REMEDIAL CENTRE FAMILY CLUB"</span> please fill up the Membership Form and  e-mail us at </p> <p><br/><Link to = "info@remedialcentre.com">info@remedialcentre.com</Link>  or Fax  <span className="font-extrabold"><br/>+92 21-36638189 us.</span></p>
                </div>
                </div>
            </section>
                </div>
                )
}
export default RC_member;