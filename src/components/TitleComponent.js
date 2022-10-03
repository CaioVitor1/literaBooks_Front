import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
export default function Title(){
    const [jwt, setJwt] = useState("a")
    const navigate = useNavigate();
    return(
        <TitleBody>
            <h2>Litera<span>Books</span></h2>
            {(jwt === "") && (
                <Auth>
                <h4 onClick={() => navigate("/signin")}>  Login</h4>
                <h4 onClick={() => navigate("/signup")}> Cadastro</h4>
            </Auth>
            )}
            {(jwt !== "") && (
                <OptionsHeader>
                    <h4> Página inicial</h4>
                    <h4> Comunidade</h4>
                    <h4> Meus livros</h4>
                    <h4> Meu perfil</h4>
                </OptionsHeader>
            )}
               
        </TitleBody>
    )
        
}

const TitleBody = styled.div`
margin: 40px 50px;
border:solid;
border-radius: 10px;
border-color: #8b4513;
padding-bottom: 30px;
border-width: 1px 0px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: white;
@media (max-width: 600px) {
    flex-direction: column;
  }
h2{
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-size: 50px;
    font-weight: 200;
    color: #8b4513;
}
span{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 50px;
    font-weight: 100;
}
`
const Auth = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
width: 500px;
padding-top: 30px;
h4{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 25px;
    font-weight: 200;
    color: #8b4513;
    margin-bottom: 20px;
   
}
`

const OptionsHeader = styled.div` 
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
h4{
margin-right: 10px;
font-family: 'Lato', sans-serif;
font-style: normal;
font-size: 20px;
color: #8b4513;
margin-right: 80px;
@media (max-width: 600px) {
    margin-right: 10px;
  }    
   
}
`