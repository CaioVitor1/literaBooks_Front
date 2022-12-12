import styled from "styled-components";

export const InitialPageBody = styled.div`
background: rgb(238,174,213);
background: linear-gradient(90deg, rgba(238,174,213,0.5620448008304885) 0%, rgba(148,187,233,1) 58%); 
padding: 20px;

`

export const Main = styled.div`
margin-top:50px;

border:solid;
margin-bottom: 50px;
border-width: 1px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 60px;
    font-weight: 200;
    color: black;

    @media (max-width: 600px) {
        font-size: 50px;
  }
}
`

export const Image = styled.div`
border-width: 1px;
width: 100%;
display:flex;

@media (max-width: 600px) {
        flex-direction: column;
  }
img{   
    margin: 0 auto;
    width: 70%;
}
`

export const Options = styled.div`
margin:20px 0px 0px 10px;
display: flex;
flex-direction: column;
justify-content: center;

h3{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 23px;
    font-weight: 200;
    color: black;
    margin-bottom: 20px;
}
`

export const Footer = styled.div` 
margin: 50px 30px;
display: flex;
align-items: center;
width: 40%;
justify-content: center;
@media (max-width: 700px) {
    border:solid;
    border-width: 1px;
    border-radius: 20px;
    width:70%;
    margin-left:40px;
  }
img{
    margin-left:40px;
    width: 100px;
    height: 100px;
}
h3{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 20px; 
    color: black;
    margin-left: 20px;
}
`

export const Citations = styled.div`
h4{

margin: 10px 20px;
font-size: 15px;
}
`