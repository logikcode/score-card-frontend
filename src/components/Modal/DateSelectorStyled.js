import styled from "styled-components";


export const Date = styled.div`

    display: flex;
    flex-direction: row;
    background: #FFFFFF;
    border: 1px solid #C4C4C4;
    border-radius: 4px;
    align-items: center;
    padding: 8px;
    margin: 5px;
    gap: 8px;
    margin-right: 40px;
   

    .date-icon{
        width: 30px;
        height: 30px;
        /* background: #979797; */
    }

    .weeks{
        width: 51px;
        height: 19px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #979797;
    }

`

export const DateWrapper = styled.div`
/* border: 1px solid red; */
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: #FFFFFF;
margin: 5px 0;
border-radius: 4px;
width: 100%;
cursor: pointer;

.current-week{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-left: 40px;
    color: #21334F;
}



`