import styled from "styled-components";



export const Background = styled.div`
background-color: white;
border: solid;
border-width: 1px;
border-radius: 20px;
border-color:#8b4513;
width:80%;
padding: 30px 0px;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
`
export const UsersPreferencesContent = styled.div`
width: 90%;
margin-top:40px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
margin-left:60px;
font-size:30px;
color: #8b4513;
width: 60%;
@media (max-width: 600px) {
  font-size: 25px;
  
    width: 60%;
  }
}
input {
    width: 50%;
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
    margin-left: 18px;
    margin-bottom: 13px;
}
h3{
font-size: 15px;
font-family: 'Lato', sans-serif;
margin: 20px 0px 10px 18px;
}
img{
width: 30%;
border-radius: 10px;
margin-bottom: 20px;
}
`

