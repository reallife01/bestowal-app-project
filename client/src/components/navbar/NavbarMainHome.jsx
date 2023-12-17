import React, { useState } from 'react';
import { TbBusinessplan } from 'react-icons/tb'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbarMainHome.css';
import assets from '../../assets'
import { Link, useNavigate } from 'react-router-dom';
import  CustomButton  from '../CustomButton';
import { useStateContext } from '../../context';
import "./navbarMainHome.css"

const Navbar = (props) => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className="bestowal__navbar">
      <div className="bestowal__navbar-links">
        <div className="bestowal__navbar-links_logo">
          <img src={assets.bestowal2} />
        </div>
        <div className="bestowal__navbar-links_logo0">
          <img src={assets.best1} />
        </div>
        <div className="bestowal__navbar-links_container">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About</Link></p>
          <p><Link to="/features">Features</Link></p>
          <p><Link to="/possibility">Possibility</Link></p>
          <p><Link to="/blog">Library</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>
      </div>
      <div className="dashboardLog flex space-x-2 justify-center">
          <Link to="/hero">
          <div className="mx-6 inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700">
          <TbBusinessplan />
          </div>
          </Link>
          <div className="sm:flex hidden flex-row justify-end gap-4">
        <CustomButton 
          btnType="button"
          title={address ? 'Connected' : 'Connect'}
          styles={address ? 'bg-orange-600' : 'bg-[#8c6dfd]'}
          handleClick={() => {
            if(address) navigate('/create-campaign')
            else connect()
          }}
        />
        </div>
        </div>
      <div className="bestowal__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="bestowal__navbar-menu_container scale-up-center">
          <div className="bestowal__navbar-menu_container-links">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/features">Studies</Link></p>
            <p><Link to="/possibility">Possibility</Link></p>
            <p><Link to="/blog">Library</Link></p>
            <p><Link to="/contact">Contact</Link></p>
          </div>
          <div className="flex space-x-2 justify-center">
          <Link to="/hero">
          <div className="mx-4 inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700">
          <TbBusinessplan />
          </div>
          </Link>
          <div className="flex mx-4">
            <CustomButton 
              btnType="button"
              title={address ? 'Connected' : 'Connect'}
              styles={address ? 'bg-orange-600' : 'bg-[#8c6dfd]'}
              handleClick={() => {
                if(address) navigate('/create-campaign')
                else connect();
              }}
            />
            </div>
        </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar