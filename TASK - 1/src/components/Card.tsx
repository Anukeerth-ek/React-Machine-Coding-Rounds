import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";

const Card = () => {
     const [data, setData] = useState([]);
     const limit = 12;

     useEffect(() => {
          const fetchApiData = () => {
               fetch(`https://jsonplaceholder.typicode.com/photos?limit=${limit}`)
                    .then((res) => res.json())
                    .then((data) => setData(data));
          };
          fetchApiData();
     }, []);

     return (
          <div>
               <div>
                    <ImageCard data={data} />
               </div>
          </div>
     );
};

export default Card;
