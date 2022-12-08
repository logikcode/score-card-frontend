import styled from "styled-components";

export const TableRow = styled.tr`

//border: 1px solid black;
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 10px 0;
margin-left: -20px;
position: relative;
//box-shadow: 0px 1px gray;

.data{
    //border: 1px solid greenyellow;
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-left: 0;
    align-items: center;
    width: 70px;
    color: black;
    margin-bottom: 10px;

}

.name-abbreviation{
    font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
border-radius: 100%;
padding: 8px;
background: #F3FBF2;
/* identical to box height, or 143% */


color: #14A800;
}
.overall-rating{
    //padding-left: 40px;
}

.row-icon{
   
    /* border: 1px solid blue; */
    padding-right: 20px;
    justify-content: center;
    position: relative;
    cursor: pointer;
    /* align-items: center; */
}

`



export const TableData = styled.td`
 /* border: 2px solid red;  */
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
width: 60px;
color: #000000;
align-items: center;
justify-content: center;
margin-left: -25px;
padding-top: 10px;
text-align: center;
padding-left: 25px;



`