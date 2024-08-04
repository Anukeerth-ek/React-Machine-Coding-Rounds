import { useState } from "react";

const FaqSection = (props: any) => {
     const data = props.data;

     const [faqId, setFaqId] = useState<number | null>();

     const handleFaq = (itemId: number) => {
          setFaqId(itemId === faqId ? null : itemId);
     };
     return (
          <div className="mx-20 mt-5 ">
               {data.map((item: any, index: number) => {
                    return (
                         <div
                              key={index}
                              className={`  mb-2 px-4 py-2 cursor-pointer bg-gray-100  ${
                                   faqId === item.id ? "bg-slate-200" : "hover:bg-gray-200"
                              }`}
                              onClick={() => handleFaq(item.id)}
                         >
                              <div className="flex items-center text-purple-800 text-xl">
                                   <p className="mr-6">{item.id}.</p>
                                   <p className="text-xl">{item.question}</p>
                              </div>

                              {faqId === item.id ? <p className="text-gray-700 ml-10 mt-1">{item.answer}</p> : ""}
                         </div>
                    );
               })}
          </div>
     );
};

export default FaqSection;
