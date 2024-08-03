import { headerData } from "../utils/data";

const Header = () => {
     return (
          <header>
               <nav className="bg-rose-500 text-white">
                    <div className="flex items-center justify-between mx-20 py-5 ">
                         <h2 className="text-2xl">React Infinite Scroll</h2>
                         <ul className="flex gap-8">
                              {headerData.map((item, index) => (
                                   <li key={index}>{item.link}</li>
                              ))}
                         </ul>
                    </div>
               </nav>
          </header>
     );
};

export default Header;
