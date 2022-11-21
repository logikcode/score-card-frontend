import React, { useRef } from 'react';
import { useState } from 'react';
import { SideBarContainer, Container, WrapperForPerformanceReport, WrapperForDecadevManagement, WrapperForAdminManagement, WrapperForLogout, NavigationLink } from './SuperAdminSidebarStyled';
import iconHome from "../../Assets/Images/iconHome.svg";
import iconUser from "../../Assets/Images/User.svg";
import iconAdmin from "../../Assets/Images/iconAdmin.svg";
import iconLogout from "../../Assets/Images/iconLogout.svg";


function SuperAdminSideBar() {
    const ref = useRef(null);
const [isActive, setActiveLink] = useState(false)
//console.log("outer func rendered")
 console.log(isActive)
const handleClick = () => {
    
     setActiveLink( isActive => !isActive);
     console.log("handle click fire")
    
     console.log(isActive)
    
}

  return (
    <>
        < SideBarContainer>
            <Container>
                <WrapperForPerformanceReport  className={`${ isActive ? 'active-link':""}`} onClick={handleClick}>
                    <img src={iconHome} alt="" className="icon-home" />
                    <NavigationLink>Perfomance Report</NavigationLink>
                </WrapperForPerformanceReport>

                 <WrapperForDecadevManagement  className={`${isActive ? 'active-link':""}`} onClick={(e)=> {handleClick()}}>
                    <img src={iconUser} alt="" className="img-user" />
                    <NavigationLink>Decadev Management</NavigationLink>
                </WrapperForDecadevManagement>

                <WrapperForAdminManagement className={`${isActive ? 'active-link':""}`} onClick={(e)=> {handleClick()}}>
                    <img src={iconAdmin} alt="" className="admin" />
                    <NavigationLink>Admin Management</NavigationLink>
                </WrapperForAdminManagement>
                
            </Container>
            

           

            

            <WrapperForLogout>
                <img src={iconLogout} alt="" className="logout-icon" />
                <NavigationLink>Logout</NavigationLink>
            </WrapperForLogout>
        </SideBarContainer>
    </>
  )
}

export default SuperAdminSideBar