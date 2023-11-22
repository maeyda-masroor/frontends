import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const FAQ = (isLoading) => {
    isLoading = false;
    const [faq, setFAQ] = useState([]);
    const getAllFAQ = async () => {
        try {
            isLoading = true;
            const res = await axios.get('http://localhost:3002/API/FAQ/FAQs');
            isLoading  = false;
            console.log(res.data);
            const data = await res.data;
            setFAQ(data);
             } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        setTimeout(() => {
            getAllFAQ()
        },);
    })
    return (
            <div>
                     <div class="flex min-h-screen items-center justify-center">
                         <section  class="px-40">
                         <div  class="mb-24 text-center">
                         <h3  class="block antialiased font-sans font-semibold relative mb-5 mt-10 text-center text-2xl leading-tight tracking-normal text-amber-900"> We’ve got answers </h3>
                         <h1  class="block antialiased font-sans relative my-5 text-center text-4xl font-bold leading-tight tracking-normal text-amber-900 md:text-5xl"> Frequently Asked Questions </h1>
                         <p  class="block antialiased font-sans relative my-5 mx-auto text-center text-lg font-normal leading-relaxed tracking-normal text-amber-900 md:text-xl lg:max-w-4xl"> Check out what other people are usually interested in! </p>
                         </div>
         
                      <div  class="grid grid-cols-12 ">
                         <div  class="col-span-12 lg:col-start-4 lg:col-span-6">
                         {faq?.map((faq) => {  
                         return (
                         <div>
                         <h5  class="block antialiased tracking-normal font-sans text-xl leading-snug text-inherit mt-6 mb-1 font-semibold !text-amber-900">{isLoading ? <Skeleton/> : faq.title}</h5>
                         <div  class="block antialiased font-sans text-base leading-relaxed mb-4 font-normal text-amber-900">{isLoading ? <Skeleton/> : faq.description}</div>
                         <hr  class="my-6 border-amber-900"/>
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
export default FAQ;















    