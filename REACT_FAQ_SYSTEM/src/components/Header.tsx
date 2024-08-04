import { headerData } from "../utils/data/data";

const Header = () => {
     return (
          <header>
               <nav>
                    <div className="bg-purple-600 text-white">
                         <div className="flex flex-wrap items-center justify-between mx-20 py-8">
                              <h2 className="text-2xl font-semibold">REACT FAQ SECTION</h2>
                              <ul className="flex gap-8 ">
                                   {headerData.map((item, index) => (
                                        <li key={index} className="cursor-pointer hover:scale-125 duration-300">
                                             {item.link}
                                        </li>
                                   ))}
                              </ul>
                         </div>
                    </div>
               </nav>
          </header>
     );
};

export default Header;
