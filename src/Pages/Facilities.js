import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Facilites = (isLoading) => {
    isLoading = false;
    const [faclities, setFacilites] = useState([]);
    const getAllFacilities = async () => {
        try {
            isLoading = true;
            const res = await axios.get('http://localhost:3002/API/Facilities/F');
            isLoading  = false;
            console.log(res.data);
            const data = await res.data;
            setFacilites(data);
             } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            getAllFacilities()
        },);
    })
    return (
            <div>
                     <div class="flex min-h-screen items-center justify-center">
                         <section  class="px-40">
                         <div  class="mb-24 text-center">
                         <h3  class="block antialiased font-sans font-semibold relative mb-5 mt-10 text-center text-2xl leading-tight tracking-normal text-amber-900"> Facilities </h3>
                         <h1  class="block antialiased font-sans relative my-5 text-center text-4xl font-bold leading-tight tracking-normal text-amber-900 md:text-5xl"> Facilites which we provide </h1>
                    </div>        
                      <div  class="grid grid-cols-12 ">
                         <div  class="col-span-12 lg:col-start-4 lg:col-span-6">
                         {faclities?.map((faclities) => {  
                         return (
                         <div>
                         <h5  class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-amber-900 underline">{isLoading ? <Skeleton/> : faclities.title}</h5>
                         <div  class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-amber-900">{isLoading ? <Skeleton/> : faclities.description}</div>
                        </div>
                         )})}
                         </div>
                         </div>
                 <div class="w-full pt-5 px-4 mb-8 mx-auto ">
                 </div>
             </section>
         </div>
         
                 </div>
     
     )}
export default Facilites;