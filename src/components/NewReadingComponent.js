import styled from "styled-components";

export const NewReadingBody = styled.div`
border:solid;
margin: 0 auto;
display: flex;
justify-content: center;
border-width: 1px 0px;
border-color: #8b4513;
width: 90%;
h2{
font-size: 30px;
color: #8b4513;
}

`
export const NewReadingInfos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 30px;
width: 60%;

margin: 0 auto;
input {
width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: black;
margin-left: 18px;
margin-bottom: 13px;
@media (max-width: 730px) {
    width: 80%;
  }
}
h3{
font-size: 20px;
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
`
export const RegisterBook = styled.div`
margin: 0 auto;
width: 35vh;
height: 7vh;
border-radius: 10px;
background-color: #3cb371;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
    margin-top: 30px;
    width: 25vh;
    height: 5vh;
  }
h4{
font-size: 20px;
color:white;
}
` 