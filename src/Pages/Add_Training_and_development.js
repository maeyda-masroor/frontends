import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import swal from 'sweetalert';
export default function Add_training_and_development() {
  const quillRef = useRef(null);
  const handleSave = async(event) => {
    const editorContent = quillRef.current.getEditor().getText();
    console.log(editorContent);
    const newTraining_and_development ={
      description:editorContent
    }
    try {
      await axios.post("http://localhost:3002/API/Training_And_Development/", newTraining_and_development);
      swal('data is Saved');
       } catch (error) {
      console.log("Something went wrong", error);
      }
  };

  return (

    <div class="bg-white shadow p-4 py-8" x-data="{ images: [] }">
    <div class="heading text-center font-bold text-2xl m-5 text-amber-800 bg-white">New FAQ </div>
    <div class="editor mx-auto w-10/12 flex flex-col text-amber-800 border border-amber-300 p-4 shadow-lg max-w-2xl">
    <ReactQuill ref={quillRef} />
      <button onClick={handleSave}>Save</button>
    </div>
    </div>
  );
  }