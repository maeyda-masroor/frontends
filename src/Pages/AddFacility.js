import React from "react";
import { useState } from "react";
import axios from 'axios';
import swal from "sweetalert";
function AddFacility(){
    const [input,setInput] = useState({
        title:'',
        description:''
    })
    function handleChange(e){
        const {name , value } = e.target;
        setInput((prev)=>{
            return{...prev,[name]:value}
    })
    console.log(e.target);
    }
    const handlesubmit = async(event)=>{
        event.preventDefault();
        const newFacility ={
          title:input.title,
          description:input.description
        }
        try {
          await axios.post("http://localhost:3002/API/Facilities/", newFacility);
          swal('data is Saved');
           } catch (error) {
          console.log("Something went wrong", "error");
          }
      };
    
    return (
        <div class="bg-white shadow p-4 py-8" x-data="{ images: [] }">
        <div class="heading text-center font-bold text-2xl m-5 text-amber-800 bg-white">New FAQ </div>
        <div class="editor mx-auto w-10/12 flex flex-col text-amber-800 border border-amber-300 p-4 shadow-lg max-w-2xl">
            <input class="title bg-amber-100 border border-amber-300 p-2 mb-4 outline-none" spellcheck="false" placeholder="Title" type="text" name='title' onChange={handleChange} value={input.title}/>
            <textarea class="description bg-amber-100 sec p-3 h-60 border border-amber-300 outline-none" spellcheck="false" placeholder="Description related to FAQ?" onChange={handleChange} name='description' value={input.description} ></textarea>
            <br/>
            <div class="buttons flex justify-end">
                <div class="btn border border-amber-900 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-amber-900" onClick={handlesubmit}>Add FAQ</div>
            </div>
        </div>
        </div>
    )
      
}
export default AddFacility;