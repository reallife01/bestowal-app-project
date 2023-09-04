import React, { useState } from 'react';
import { TbBusinessplan } from 'react-icons/tb'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbarMainHome.css';
import { best1, bestowal2 } from '../../assets'
import { Link } from 'react-router-dom';
import { connectWallet } from '../../services/blockchain'
import { useGlobalState, truncate } from '../../store'
import "./navbarMainHome.css"

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <div className="bestowal__navbar">
      <div className="bestowal__navbar-links">
        <div className="bestowal__navbar-links_logo">
          <img src={bestowal2} />
        </div>
        <div className="bestowal__navbar-links_logo0">
          <img src={best1} />
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
          <Link to="/dashboard">
          <div className="mx-6 inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700">
          <TbBusinessplan />
          </div>
          </Link>
          {connectedAccount ? (
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {truncate(connectedAccount, 4, 4, 11)}
            </button>
          ) : (
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700
            hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
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
          <Link to="/dashboard">
          <div className="mx-4 inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700">
          <TbBusinessplan />
          </div>
          </Link>
          {connectedAccount ? (
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700 hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              {truncate(connectedAccount, 4, 4, 11)}
            </button>
          ) : (
            <button
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              className="inline-block px-6 py-2.5 bg-orange-600
            text-white font-medium text-xs leading-tight uppercase
            rounded-full shadow-md hover:bg-gray-700
            hover:shadow-lg
            focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}
        </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar