import React, { useState } from "react";
import { ReactFormHeading } from "../types/types";
import { formData } from "../utils/data";

const InputForm = ({ heading }: ReactFormHeading) => {

     const [inputFormData, setInputFormData] = useState({
          username: '',
          email: '',
          password: ''
     })

     const [errors, setError] = useState<any>({})
   
  const handleformInput = (e:any)=> {
     e.preventDefault()

     const validateError = handleValidation()
     if(Object.keys(validateError).length === 0) {
          console.log("Form submitted succesfully");
          alert("Sucess")
     }
     else {
          setError(validateError)
         
     }
  }


const handleInputChange = (e:any)=> {
     const {name, value} = e.target;
     setInputFormData({
          ...inputFormData, [name]:value
     })
}

interface StoreErrorTypes {
     username?: string,
     email?: string,
     password?: string
}
const handleValidation = ()=> {
     const storeError:StoreErrorTypes = {}
     if(!inputFormData.username) storeError.username = "username can't be empty"
     if(!inputFormData.email) storeError.email = "email can't be empty"
     if(!inputFormData.password) storeError.password = "password can't be empty"

     return storeError;
}
     return (
          <div className="flex flex-col  items-center flex-wrap justify-center">
               <h2 className="text-2xl font-bold mt-8 mb-6">{heading}</h2>
               <div className=" w-[340px] md:w-[380px] ">
                    <form
                         action=""
                         className="md:mx-auto flex flex-col border-2 border-slate-300 rounded-md py-3 md:px-5 px-3  text-left"
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
                                {errors[item.name] && <p className="text-red-600 -translate-y-4">{errors[item.name]}</p>}
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
