import styled from 'styled-components';

export const NewReadingBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;


export const NewReadingTitle = styled.div`
border:solid;
margin: 0 auto;
display: flex;
justify-content: center;
border-width: 1px 0px;
border-color: black;
width: 90%;

h2{
font-size: 30px;
color: #8b4513;
}

`;
export const NewReadingInfos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 30px;
width: 60%;
border:solid;
border-width: 1px;
border-radius: 10px;
background-color: white;
margin: 20px auto;
padding-bottom: 30px;
input {
  width: 70%;
    height: 38px;
    background: #FFFFFF;
    border-radius: 5px;
    border-width: 0px 0px 4px 0px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: black;
    margin-left: 18px;
@media (max-width: 730px) {
    width: 80%;
    font-size: 15px;
  }
}
h3{
font-size: 15px;
font-family: 'Lato', sans-serif;
margin: 20px 0px 10px 18px;

}
textarea{
margin: 0px 0px 20px 18px;
width: 60vh;
height: 60vh;
font-size: 17px;
@media (max-width: 730px) {
    width: 90%;
  }
}
select{
margin: 10px 0px 18px 10px;

}
`;