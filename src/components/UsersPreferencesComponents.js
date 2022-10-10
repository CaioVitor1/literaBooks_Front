import styled from "styled-components";
import imagem from "../assets/images/background.jpg";

export const Background = styled.div`
margin:0 auto;
border: solid;
border-width: 1px;
border-radius: 20px;
border-color:#8b4513;
background-image: url(${imagem});
width:100vh;
height: 100vh;

`
export const UsersPreferencesBody = styled.div`
width: 90%;
margin-top:70px;
display: flex;
flex-direction: column;

h2{
font-size:30px;
color: #8b4513;
}
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
}
h3{
font-size: 20px;
font-family: 'Lato', sans-serif;
margin: 20px 0px 10px 18px;
}

`

export const Next = styled.div`
margin-top: 100px;
margin-left:100px;
width: 35vh;
height: 7vh;
border-radius: 10px;
background-color: #3cb371;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
    margin-top: 30px;
    margin-left: 30px;
  }
h4{
font-size: 20px;
color:white;
}
`