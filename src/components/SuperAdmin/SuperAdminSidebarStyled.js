import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const SideBarContainer = styled.div`
width: calc(20%);
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.04));


`

export const Container = styled.div`
margin-top: 20px;

`
export const WrapperForPerformanceReport = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 16px;
background: #14A800;
border-radius: 4px;
width: 80%;
height: 48px;
margin: 0 auto;
cursor: pointer;
.icon-home{
    color: gray;
    background: #14A800;
}
.active-link{
    background: #14A800;
}

`
export const WrapperForDecadevManagement = styled.div`

display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 16px;
width: 80%;
height: 48px;
margin: 0 auto;
border-radius: 4px;
cursor: pointer;

.activeh{
    background: #14A800;
    /* display: none; */
}


`

export const WrapperForAdminManagement = styled.div`

display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 16px;

width: 80%;
height: 48px;
margin: 0 auto;
border-radius: 4px;
cursor: pointer;

.activeh{
    background: #14A800;
}


`
export const WrapperForLogout = styled.div`

display: flex;
flex-direction: row;
align-items: center;
padding: 8px 16px;
gap: 16px;
justify-self: end;
align-self: flex-end;
width: 80%;
height: 48px;
margin: 0 auto;
border-radius: 4px;
margin-bottom: 20px;
background: rgba(20, 168, 0, 0.05);
cursor: pointer;

`

export const NavigationLink = styled(NavLink)`
/* border: 1px solid blue; */
height: 30px;
width: 100%;
padding: 1px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
text-decoration: none;
/* color: #FFFFFF; */

`
