import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Background, Next, UsersPreferencesBody } from "../components/UsersPreferencesComponents"
export default function UsersPreferences(){
    const navigate = useNavigate()
    const [favoriteBook, setFavoriteBook] = useState("");
    const [favoriteAuthor, setFavoriteAuthor] = useState("");
    function sendPrerences() {
        if(!favoriteAuthor || !favoriteAuthor){
            alert("Por favor, preencha todos os campos!")
        }else (
            navigate('/readingoal')
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
            <h4> Ir para próxima página! </h4>
        </Next>
    </UsersPreferencesBody>
    </Background>
)
}
