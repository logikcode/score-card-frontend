import styled from "styled-components";

export const EditDetailDiv = styled.div`
//border: 1px solid red;
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: flex-start;

width: 200px;
height: 150px;
position: absolute;
right: 2px;
top:50%;
background-color: white;
z-index: 2;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.04));


.edit-score, .delete-dev {
   // border: 1px solid blue;
    color: black;
    cursor: pointer;
    padding-left: 15px;
}
.delete-dev{
    margin-top: -40px;
    
}

`