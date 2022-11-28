import styled from "styled-components";

export const SignContent = styled.div`
width: 50%;
margin: 0px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
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
    :last-child{
        margin-bottom: 0px;
    }
}
h3{
    margin: 20px 0px 5px 18px;
    font-size: 20px;
    font-family: 'Lato', sans-serif;
}
h4{
    font-size: 13px;
    color: gray;
    width: 320px;
    margin-left: 20px;

}
button{
    width: 100px;
    height: 100px;
    border-radius: 30px;
}
`

export const Button = styled.div`
background-color: #8b4513;
border:solid;
border-width: 2px;
display: flex;
justify-content: center;
align-items: center;
width: 200px;
height: 50px;
border-radius: 30px;

`