import React, { useState } from "react";
import { ReactFormHeading } from "../types/types";
import { formData } from "../utils/data";

const InputForm = ({ heading }: ReactFormHeading) => {
     const [inputFormData, setInputFormData] = useState({
          email: '',
          username: '',
          password: ''
     });
     interface ErrorsTypes {
          email?: string;
          password?: string;
          username?: string;
          // Add other possible fields as needed
      }

     const [errors, setErrors] = useState<ErrorsTypes | any>({})
     // function for handling the form
     const handleformInput = (event:any) => {
         event.preventDefault()
         const validateErrors = handleValidation();
         if(Object.keys(validateErrors).length === 0) {
          console.log("Form submitted sucessfully", inputFormData)
          alert("Form submitted successfully")
         }
         else {
          setErrors(validateErrors)
          alert("Please fill this correctly")
         }
     };
     const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
         const {name, value} = event.target;
         setInputFormData({
          ...inputFormData, [name]:value,
         })
     };
     
     interface ErrorTypes {
          email?: string,
          password?:string,
          username?:string
     }
     // validate input form fields
     const handleValidation = ()=> {
          const newErrors:ErrorTypes = {};
          if(!inputFormData.email) newErrors.email = "Email is required";
          if(!inputFormData.password) newErrors.password  = "Password is required";
          if(!inputFormData.username) newErrors.username = "User name is required"
          console.log(newErrors.username)
          return newErrors

     }
    
console.log("Errors:", errors)

     return (
          <div className="flex flex-col  items-center flex-wrap justify-center">
               <h2 className="text-2xl font-bold mt-8 mb-6">{heading}</h2>
               <div className="w-[380px] ">
                    <form
                         action=""
                         className="md:mx-auto flex flex-col border-2 border-slate-300 rounded-md py-3 md:px-5 px-3 mx-3 text-left"
                         onSubmit={handleformInput}
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
                                {errors[item.name] && <p className="text-red-600 -translate-y-4">Please fill {item.name} correctly</p>}
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
