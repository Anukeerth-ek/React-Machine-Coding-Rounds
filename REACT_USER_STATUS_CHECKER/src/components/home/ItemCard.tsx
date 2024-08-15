import React, { useEffect, useState } from "react";
import { dataTypes } from "./Home";
import "./itemcard.css";
import offlineImage from '../../assets/offline_image.jpg'

interface ItemCardProps {
     data: dataTypes[];
}
const ItemCard: React.FC<ItemCardProps> = ({ data }) => {
     const [showData, setShowData] = useState<boolean>(true);
     const handleOffline = () => {
          setShowData(false);
     };

     const handleOnline = () => {
          setShowData(true);
     };
     useEffect(() => {
          window.addEventListener("online", handleOnline);
          window.addEventListener("offline", handleOffline);

          return ()=> {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
          }
     }, []);

     return (
          <div className="wrapper">
              { data.map((item, index: number) => (
                           <div key={index} className="wrapper-card">
                              <img src={showData ? item.image : offlineImage } alt= {showData ? "Laptop-image" : "Offline-image"} /> 
                                <h4>{item.title}</h4>
                                <div className="detail-container">
                                     <span>${item.price}</span>
                                     <span>{item.rating}</span>
                                </div>
                           </div>
                      ))}
                    
          </div>
     )
};

export default ItemCard;
