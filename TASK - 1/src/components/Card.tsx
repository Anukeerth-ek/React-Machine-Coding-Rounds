import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";

const Card = () => {
     const [data, setData] = useState([]);
     const [limit, setLimit] = useState(8);
     const initialValue = 0;

     useEffect(() => {
          const handleInfiniteScroll = () => {
               if (window.innerHeight + document.documentElement.scrollTop + 2 >= document.documentElement.scrollHeight) {
                    setLimit(limit + 8 );
                    console.log(limit);
               }
          };
          document.addEventListener("scroll", handleInfiniteScroll);
     }, [limit]);

     useEffect(() => {
          const fetchApiData = () => {
               fetch(`https://jsonplaceholder.typicode.com/photos`)
                    .then((res) => res.json())
                    .then((data) => setData(data.slice(initialValue, limit)));
          };
          fetchApiData();
     }, [limit]);
     return (
          <div>
               <div>
                    <ImageCard data={data} />
               </div>
          </div>
     );
};

export default Card;
