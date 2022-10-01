import styled from "styled-components";

export const InitialPageBody = styled.div`
background-color: #fff0f5;
padding: 20px;

`

export const Main = styled.div`
margin-top:50px;
margin-left: 200px;
border:solid;
margin-bottom: 50px;
border-width: 1px 0px;
h2{
    
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 60px;
    font-weight: 200;
    color: #8b4513;
}
`

export const Image = styled.div`

border-width: 1px;
width: 100%;
display:flex;
img{   
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
    color: #8b4513;
    margin-bottom: 20px;
}
`

export const Footer = styled.div` 
margin-top: 50px;
display: flex;
align-items: center;

width: 30%;
img{
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