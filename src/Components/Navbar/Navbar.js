import  { useState } from "react";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { Link, NavLink } from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from '../../Assets/logo.png';
import { motion} from 'framer-motion';


const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  
  

  const handleHistory=()=>{
    window.scrollTo({top:0,behavior:'smooth'})
}

const handleMobileHistory=()=>{
  window.scrollTo(0, 0);
  setIsOpen(false);
}


  return (
    <nav className="navbar md:bg-transparent bg-opacity-50 md:bg-opacity-70 backdrop-blur-md">
      <div className="navbar-left">
        <Link to="/"
         onClick={handleHistory}>  
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div className="brand">
          <NavLink to="/"
           onClick={handleHistory}>
           
            <h1><span className="text-blue-800">GLOBAL</span>STARS</h1>
          </NavLink>
          
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu ml-[4rem]">
      
        <ul className="navbar-menu">
          <li>
            <NavLink activeClass="active" to="/"
             onClick={handleHistory}>Home</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/about-us"
             onClick={handleHistory}>About Us</NavLink>
          </li>
          
          <li className="nav-item gallery-dropdown flex flex-row">
            <p className="font-semibold">Services</p>
            <ArrowDropDownIcon/>
            <ul className="dropdown bg-white bg-opacity-50 md:bg-opacity-70  backdrop-blur-md">
              <li>
                <NavLink activeClass="active"   to="/land-remediation"
                 onClick={handleHistory}>Land Remediation</NavLink>
              </li>
              <li>
                <NavLink activeClass="active"   to="/radiation-safety-protection"
                 onClick={handleHistory}>Radiation Safety and Protection</NavLink>
              </li>
              <li>
                <NavLink activeClass="active"   to="/litigation-support"
                onClick={handleHistory}>Litigation Support</NavLink>
              </li>
              <li>
                <NavLink activeClass="active"   to="/environmental-protection"
                onClick={handleHistory}>Environmental Protection</NavLink>
              </li>
              <li>
                <NavLink activeClass="active"   to="/boroscope-inspection"
                onClick={handleHistory}>Boroscope Inspection</NavLink>
              </li>
              <li>
                <NavLink activeClass="active"   to="/testing-analysis"
                onClick={handleHistory}>Testing and Analysis</NavLink>
              </li>
            </ul>
          </li>
          <li >
            <NavLink activeClass="active"  to="/our-collections"
             onClick={handleHistory}>Gallery</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/faqs"
             onClick={handleHistory}>FAQs</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/contact-us"
             onClick={handleHistory}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink activeClass="active"  to="/terms-and-conditions"
             onClick={handleHistory}>Terms and Conditions</NavLink>
          </li>
          
        </ul>
      </div>
      <div className="navbar-right w-auto">
        
          </div> 

     
    {/* Mobile Menu */}
    
    <div className="relative lg:hidden">
      {/* Hamburger Button */}
      <div className="fixed top-5 right-5 z-30">
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed top-0 right-0 min-h-screen w-[65%] bg-white bg-opacity-90 z-20`}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <nav>
          <ul className="flex flex-col items-start p-8 space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
              
                 onClick={handleMobileHistory}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
               
                 onClick={handleMobileHistory}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <button
                className="focus:outline-none mb-2"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ArrowDropDownIcon />
              </button>
              {isServicesOpen && (
                <ul className="pl-4 space-y-2">
                  <li>
                    <NavLink
                      to="/land-remediation"
                      className={({ isActive }) =>
                        isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsServicesOpen(false);
                        handleMobileHistory();
                      }}
                       
                    >
                      Land Remediation
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/radiation-safety-protection"
                      className={({ isActive }) =>
                        isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                        handleMobileHistory();
                      }}
                      
                    >
                      Radiation Safety and Protection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/litigation-support"
                      className={({ isActive }) =>
                        isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                        handleMobileHistory();
                      }}
                      
                    >
                      Litigation Support
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/environmental-protection"
                      className={({ isActive }) =>
                        isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                        handleMobileHistory();
                      }}
                      
                    >
                      Environmental Protection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/boroscope-inspection"
                      className={({ isActive }) =>
                        isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                        handleMobileHistory();
                      }}
                      
                    >
                      Borescope Inspection
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/testing-analysis"
                      className={({ isActive }) =>
                        isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setIsServicesOpen(false);
                        handleMobileHistory();
                      }}
                      
                    >
                      Testing and Analysis
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            
            <li >
            <NavLink activeClass="active"  to="/our-collections"
             onClick={handleMobileHistory}>Gallery</NavLink>
          </li>
           
            <li>
              <NavLink
                to="/faqs"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
              
                 onClick={handleMobileHistory}
              >
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
              
                 onClick={handleMobileHistory}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/terms-and-conditions"
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
              
                 onClick={handleMobileHistory}
              >
                Terms and Conditions
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </motion.div>
    </div>

    </nav>
  );
};

export default Navbar;