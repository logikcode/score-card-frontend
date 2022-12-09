import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavbarContainer = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-around;
width: 100%;
height: 75px;
/* border: 1px solid red; */
background: #FFFFFF;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);

position: fixed;
top: 0;
left: 0;
z-index: 2;
`
export const Logo = styled.div`

margin-left: 30px;
`
export const LinksContainer = styled.ul`

margin-left: 80px;
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 8px;



width: 491px;
height: 40px;


border: 0.5px solid #D9D9D9;

`
export const LinkWrapper = styled.li`
display: flex;
flex-direction: row;
justify-content: space-between;
cursor: pointer;
margin: 0 auto;
height: inherit;
justify-content: center;
align-items: center;
width: 100%;
`

export const NavigationLink= styled(NavLink)`

text-decoration: none;
width: 105px;
height: 24px;
margin: 2px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
// green color
color: #14A800;
text-align: center;
/* color : darkgray */

`
export const SearchContainer = styled.div`
/* border: 1px solid red; */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px 16px;
gap: 8px;
width: 234px;
height: 48px;
background: #F8F9FA;
border: 1px solid rgba(0, 0, 0, 0.05);
margin: 0  0 0px 90px;

.search-icon{
    cursor: pointer;
    width: 24px;
height: 24px;
}

.search-form{
    /* border: 1px solid red; */
    padding: 13px;
    border: none;
    width: 80%;
    height: 17px;
    border-radius: 2px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
cursor: pointer;


color: #21334F;
}

`

export const ProfileImageWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
/* border: 1px solid red; */
margin: 20px;

.username{
    width: 69px;
height: 19px;
margin-left: 5px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;

color: #21334F;

}

`
export const HarmBurger = styled("button")`
    display: none;
    /* width: 70px;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer; */


`