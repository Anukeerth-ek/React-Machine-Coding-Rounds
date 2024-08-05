import { ReactFormHeading } from "../types/types";
import { headingList } from "../utils/data";
const Header = ({ heading }: ReactFormHeading) => {
     return (
          <header>
               <nav>
                    <div className="bg-cyan-600  ">
                         <div className="flex items-start justify-between py-8 px-10 ">
                              <h2 className="text-2xl font-bold shadow-inner">{heading}</h2>
                              <ul className="flex items-center gap-x-6 cursor-pointer ">
                                   {headingList.map((item, index) => {
                                        const baseStyles = `hover:scale-x-150 duration-150 text-black hover:-skew-x-6`;
                                        const hoverColorStyle = `hover:${item.hoverColor}`;

                                        return (
                                             <li key={index} className={`${baseStyles} ${hoverColorStyle}`}>
                                                  {item.link}
                                             </li>
                                        );
                                   })}
                              </ul>
                         </div>
                    </div>
               </nav>
          </header>
     );
};

export default Header;
