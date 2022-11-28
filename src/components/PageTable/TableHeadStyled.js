import styled from "styled-components";


export const Table = styled.table`
    /* border: 1px solid red; */
    margin: 40px 40px 0 40px;
    display: flex;
    flex-direction: column;
    
    background: rgba(33, 51, 79, 0.1);
` 
export const TableHead = styled.thead`
/* border: 1px solid blue; */
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 72px;
background: rgba(33, 51, 79, 0.1);

`
export const TableRow = styled.tr`

/* border: 1px solid green; */
  
    display: flex;
    flex-direction: row;
    width: 100%;
   
    justify-content: space-around;

`
export const TableHeader = styled.th`
/* border: 1px solid red; */

height: 22px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 140%;

letter-spacing: 0.15px;

color: #000000;

`