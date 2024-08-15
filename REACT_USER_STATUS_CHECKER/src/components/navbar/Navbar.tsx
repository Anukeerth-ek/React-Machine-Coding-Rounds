import './navbar.css'

interface navLinksTypes {
     link: string;
}
const Navbar = () => {
     const navLinks: navLinksTypes[] = [{ link: "Home" }, { link: "About" }, { link: "Contact" }, { link: "Blog" }];
     return (
          <header>
               <nav>
                    <div className="container">
                         <h2 className="heading">React User Status</h2>
                         <div>
                              <ul className="ul">
                                   {navLinks.map((item, index) => (
                                        <li key={index}>{item.link}</li>
                                   ))}
                              </ul>
                         </div>
                    </div>
               </nav>
          </header>
     );
};

export default Navbar;
