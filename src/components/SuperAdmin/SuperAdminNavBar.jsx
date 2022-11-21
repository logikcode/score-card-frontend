import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import { NavbarContainer, Logo, LinksContainer, LinkWrapper, NavigationLink, SearchContainer, ProfileImage, HarmBurger, ProfileImageWrapper } from './SuperAdminNavbarStyled';
import logo from "../../Assets/Images/logo.svg";
import searchIcon from "../../Assets/Images/search.svg";
import profileImage from "../../Assets/Images/profileImage.png";
function SuperAdminNavBar() {
  return (
    <>
    
        <NavbarContainer>
            <Logo>
                <img src={logo} alt="" className="nav-logo" />
            </Logo>

            <LinksContainer>
                <LinkWrapper>
                    
                    <NavigationLink to = "/super-admin/squad"> Dashboard</NavigationLink>
                    <NavigationLink to ="">Stacks</NavigationLink>
                    <NavigationLink to = "">Pods</NavigationLink>
                    <NavigationLink to ="">Pod List</NavigationLink>

                </LinkWrapper>
            </LinksContainer>

            <SearchContainer>     
                <img src={searchIcon} alt="" className="search-icon" />
                <input  className="search-form"  placeholder='Search'/>
            </SearchContainer>

            <ProfileImageWrapper>
                    <img src={profileImage} alt="" />
                    <h4 className="username">Cherechi</h4>
            </ProfileImageWrapper>

            <HarmBurger>&#8801;</HarmBurger>
        </NavbarContainer>

        <Outlet />
    </>
  )
}

export default SuperAdminNavBar