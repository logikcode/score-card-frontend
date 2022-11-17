import styled from "styled-components";

export const MainPage = styled.div`

display: flex;
flex-direction: row;
background: #FFFFFF;
width: 100%;
position:relative;
height: 100vh;



@media screen and (max-width: 768px) {
    flex-direction: column;
    height: 100%;

}

`

export const LoginLeftSide = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
/* height: 100vh; */
position: relative;
width: calc(100%/2);


@media screen and (max-width: 768px) {
    width: 100%;
    height: 50%;
    padding-bottom: 10px;

}


.logo-container{

width: 202px;
height: 48px;
margin: 64px 0 0 64px;

@media screen and (max-width: 768px) {
    width: fit-content;
    margin-top: 5px;
    margin-bottom: 20px;
    margin-left: 1px;
}

}



.heading-container{
    
    width: 100%;
    display: flex;
    flex-direction: column;
 align-items: flex-start;

 @media screen and (max-width: 768px) {
    
   //padding: 5px;
    font-size: 20px;
   
    }

    
}
.login-heading{
    
  
    width: 80%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #21334F;
    margin-left: 69px;
    margin-top: 50px;
    margin-bottom: 50px;

@media screen and (max-width: 768px) {
    
    width: fit-content;
    font-size: 20px;
    margin: 10px 0 0 42px;
    }

}

.login-form{
   
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 80px; */
    padding: 0px;
    gap: 15px;
    width: 100%; 
    height: 100%;

@media screen and (max-width: 768px) {

  width: 100%;
  margin-top: 10px;
   
   
}

}

.login-input-wrapper{
   
display: flex;
flex-direction: column;
align-items: flex-start;
width: 80%;
/* height: 79px; */

}

.form-label{
    width: 108px;
height: 19px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;

color: #21334F;


}



.form-input{
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 14px 24px;
width: 100%;
height: 47px;
background: #FFFFFF;
border: 1px solid rgba(33, 51, 79, 0.15);

}


.forgot-passwd-link-wrapper{
    display: flex;
    flex-direction: row;
width: 139px;
height: 19px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #34A853;
margin-right: -400px;

@media screen and (max-width: 768px) {
   
    margin-right: -240px;
}

}
.forgot-password-link{
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 19px;
color: #34A853;
text-decoration: none;
text-align: end;
text-align: center;
padding-left: 5px;
}
.forgotp-password-link :active{
    color: #34A853;
}
forgotp-password-link :visited{
    color: #34A853;
}

.submit-btn{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;
color: #FFFFFF;
font-weight: 700;
width: 80%;
height: 52px;
background: linear-gradient(96.67deg, #34A853 0%, #B8D344 100%);
border: none;
}


.show{
    color: red;
    visibility: visible;
}
.hide{
    visibility: hidden;
}
`
export const LoginRightSide = styled.div`

width: calc(100% / 2);
height: 100vh;
top: 0px;




@media screen and (max-width: 768px) {
  
width: fit-content;
object-fit: cover;
height: 0px;
visibility: hidden;
   
}

.login-image{
width: 100%;
height: 100%;
left: -432px; 
top: -75px;
object-fit: cover;

}



`