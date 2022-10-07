import { useState } from "react";
import styled from "styled-components";
import imagem from "../assets/images/background.jpg";
import { useNavigate } from "react-router-dom";
export default function UsersPreferences(){
    const navigate = useNavigate()
    const [favoriteBook, setFavoriteBook] = useState("");
    const [favoriteAuthor, setFavoriteAuthor] = useState("");
    function sendPrerences() {
        if(!favoriteAuthor || !favoriteAuthor){
            alert("Por favor, preencha todos os campos!")
        }else (
            navigate('/timeline')
        )
    }
return (
    <Background>
    <UsersPreferencesBody>
        <h2> Conte-nos um pouco mais sobre você!</h2>

        <h3> Qual seu livro preferido?</h3>
        <input type="text" value={favoriteBook} onChange={(e) => setFavoriteBook(e.target.value)} placeholder="Livro favorito" />
       
        <h3> Qual seu livro preferido?</h3>
        <input type="text" value={favoriteAuthor} onChange={(e) => setFavoriteAuthor(e.target.value)} placeholder="Livro favorito" />
    
        <Next onClick={(sendPrerences)}>
            <h4> Ir para tela principal! </h4>
        </Next>
    </UsersPreferencesBody>
    </Background>
)
}


const Background = styled.div`
margin:0 auto;
border: solid;
border-width: 1px;
border-radius: 20px;
border-color:#8b4513;
background-image: url(${imagem});
width:100vh;
height: 100vh;

`
const UsersPreferencesBody = styled.div`
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

const Next = styled.div`
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
  }
h4{
font-size: 20px;
color:white;
}
`