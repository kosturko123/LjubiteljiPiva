import React, { useState } from 'react'
import Icon from "../images/LogoWhite.svg"
import Dashboard from '../images/dashboard.svg'
import Profile from '../images/profile.png'
import { useLocation } from 'react-router-dom'
import { useMenu, useMenuUpdate } from '../Contexts/MenuContext'

const Sidebar = () => {

  const location = useLocation();

 /* const [closeMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = ()=>{

    setCloseMenu(!closeMenu);
  }
  */

  const setMenu = useMenu();
  const updateMenu = useMenuUpdate();

  return (
    <div className={setMenu === false ? "sidebar": "sidebar active"}>
      <div className={setMenu === false ? "logoContainer": "logoContainer active"}>
        <img src={Icon} alt="icon" className='icon'/>
        <h2 className='title'>Uzivaci</h2>
      </div>
      <div className={setMenu === false ? "burgerContainer": "burgerContainer active"}>
        <div className="burgerTrigger" onClick={updateMenu}></div>
        <div className="burgerMenu"></div> 
      </div>
      <div className="profileContainer">
        <img src={Profile} alt="profile" className='profile' />
        <div className="profileContents">
            <p className='name'>Toni</p>
            <p className='email'>tonisopranonj@gmail.com</p>
        </div>
      </div>
      <div className={setMenu === false ? "contentsContainer": "contentsContainer active"}>
        <ul>
            <li className={location.pathname === "/"?"active":""}>
                <img src={Dashboard} alt="dashboard" />
                <a href="/">login</a>
            </li>
            <li className={location.pathname === "/galerija" ? "active": ""}>
                <img src={Dashboard} alt="dashboard" />
                <a href="/galerija">Galerija</a>
            </li>
            <li className={location.pathname === "/profil" ? "active" : ""}>
                <img src={Dashboard} alt="dashboard" />
                <a href="/profil">Register</a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
