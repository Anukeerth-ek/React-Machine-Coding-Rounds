import React, { useState } from "react";
import { ReactFormHeading } from "../types/types";
import { formData } from "../utils/data";

const InputForm = ({ heading }: ReactFormHeading) => {
    const [inputFormData, SetInputFormData] = useState('')
    // function for handling the form
    const handleformInput = (event: React.ChangeEvent<HTMLInputElement>)=> {
        SetInputFormData(event.target.value)
        console.log(inputFormData)
    }
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>)=> {
    console.log(event.target.value)
    }
     return (
          <div className="flex flex-col items-center flex-wrap justify-center">
               <h2 className="text-2xl font-bold mt-8 mb-6">{heading}</h2>
               <div className="w-[380px] ">
                    <form
                         action=""
                         className="mx-auto flex flex-col border-2 border-slate-300 rounded-md py-3 px-5 text-left"
                         
                    >
                         {formData.map((item, index) => (
                              <React.Fragment key={index}>
                                   <label className="mb-2">{item.label}</label>
                                   <input
                                        className="border-2 mb-5 rounded-lg text-sm py-1 px-2"
                                        placeholder={item.placeholder}
                                        name={item.name}
                                        type={item.type}
                                        id={item.id}
                                        onChange={handleInputChange}
                                   />
                              </React.Fragment>
                         ))}
                         <button className="border duration-300 rounded-2xl px-8 py-3 bg-cyan-400 hover:bg-cyan-600 mt-8 text-white">
                              Submit
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default InputForm;
