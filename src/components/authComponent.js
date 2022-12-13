import styled from "styled-components";

export const AuthBody= styled.div`

border:solid;
padding: 30px 0px;
background: rgb(238,174,213);
background: linear-gradient(90deg, rgba(238,174,213,0.5620448008304885) 0%, rgba(148,187,233,1) 58%); 
`

export const SignContent = styled.div`
width: 70%;
height: 110vh;
margin: 0px auto;
display: flex;
flex-direction: column;
align-items: center;
border: solid;
border-width: 1px;
border-radius: 10px;
padding-bottom: 20px;
background-color: white;
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
    :last-child{
        margin-bottom: 0px;
    }
}
h2{
    margin: 0 auto;
    font-size: 30px;
}
h3{
    margin: 20px 0px 8px 20px;
    font-size: 15px;
    font-family: 'Lato', sans-serif;
}
h4{
    font-size: 13px;
    color: red;
    width: 70%;
    margin-left: 20px;
}
button{
    width: 100px;
    height: 100px;
    border-radius: 30px;
}
span{
    text-decoration: underline;
}
img{
    margin:30px 0px;
    border-radius: 20px;
    width: 40%;
    @media (max-width: 600px) {
    width: 60%;
  }
}
`

export const Submit = styled.div`
background-color: #8b4513;
border:solid;
border-width: 2px;
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0px 0px 0px;
width: 50%;
height: 40px;
border-radius: 30px;
background: rgb(238,174,213);
background: linear-gradient(90deg, rgba(238,174,213,0.5620448008304885) 0%, rgba(148,187,233,1) 58%); 
@media (max-width: 700px) {
    width: 60%;
    font-size: 15px;
  }
`