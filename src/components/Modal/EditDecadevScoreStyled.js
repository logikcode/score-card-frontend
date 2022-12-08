import styled from "styled-components";

export const EditDetailWrapper = styled.div`
//border: 1px solid red;
position: absolute;
top: -250%;
left: 20%;
width: 60%;
height: 600px;
z-index: 10;
background: white;
box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
//filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.04));

.edit-score-form{
   // border: 1px solid red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
width: 80%;
height: 87.5%;
margin: 1rem auto ;
}


`

export const CardHeader = styled.div`
display: flex;
justify-content: space-between;

.heading, .close-card-btn{
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.heading{
   // border: 1px solid red;
    color:  #03435F;
    margin-left: 2rem;
}

.close-card-btn{
    color:  #03435F;
    margin-right: 2rem;
    cursor: pointer;
    
}



`

export const InputWrapper = styled.div`
   // border: 1px solid blue;

display: flex;
flex-direction: column;
justify-content: baseline;
justify-items: start;

.input-label{

    color:  #03435F;
    text-align: start;
    font-size: 1.2rem;

}

.edit-input-field{

width: 100%;
height: 40px;
margin-top: 0.5rem;
border: 0.2px solid gray;

&::placeholder{
    font-size: 1.1rem;
    
}


}

.edit-input-field-readonly{
background: rgba(128, 128, 128, 0.1);
border: 0.2px solid gray;

}

`

export const SubmitButton = styled.button`
 width: 100%;
 background: #14A800;
 color: white;
 margin-bottom: .5rem;
 height: 50px;
 font-size: 1.2rem;
 border: none;
 cursor: pointer;

;
//background: linear-gradient(96.67deg, #34A853 0%, #B8D344 100%);

`