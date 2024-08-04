import { useEffect, useState } from "react";
import FaqSection from "../../components/FaqSection";

const FaqApi = () => {
     const [data, setData] = useState([]);
     useEffect(() => {
          const fetchFaqApi = async () => {
               try {
                    const response = await fetch("/json/faq.json");
                    if (!response) {
                         throw new Error(`Error is, ${response}`);
                    } else {
                         const data = await response.json();
                         setData(data);
                    }
               } catch (error) {
                    console.error("Error:", error);
               }
          };
          fetchFaqApi();
     }, []);

     return <div className="h-[100vh] ">
        <h2 className="text-center text-2xl pt-5">FAQ <span className="text-lg">(Frequently Asked Questions)</span></h2>
        <FaqSection data={data}/>
     </div>;
};

export default FaqApi;
