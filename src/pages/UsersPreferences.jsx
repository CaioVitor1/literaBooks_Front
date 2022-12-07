import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Background, Next, UsersPreferencesBody } from "../components/UsersPreferencesComponents"
import axios from "axios";

export default function UsersPreferences(){
    const navigate = useNavigate()
    const [favoriteBook, setFavoriteBook] = useState("");
    const [favoriteAuthor, setFavoriteAuthor] = useState("");
    const localToken = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${localToken}`
        }
    }
    function sendPrerences() {

        let body = {
            favoriteBook,
            favoriteAuthor
        }

        if(!favoriteBook || !favoriteAuthor){
            alert("Por favor, preencha todos os campos!")
        }else{
        const promise = axios.post(" http://localhost:5000/preferences/userspreferences", body, config)
        promise
        .then(res => {
			
            navigate('/readingoal')
        })
        .catch(res => {
            console.log("Something is wrong in requisiton")
            alert(res.data)
        }) 
        }
            

            
    
    }
return (
    <Background>
    <UsersPreferencesBody>
        <h2> Conte-nos um pouco mais sobre você!</h2>

        <h3> Qual seu livro preferido?</h3>
        <input type="text" value={favoriteBook} onChange={(e) => setFavoriteBook(e.target.value)} placeholder="Livro favorito" />
       
        <h3> Qual seu autor preferido?</h3>
        <input type="text" value={favoriteAuthor} onChange={(e) => setFavoriteAuthor(e.target.value)} placeholder="Livro favorito" />
    
        <Next onClick={(sendPrerences)}>
            <h4> Ir para próxima página! </h4>
        </Next>
    </UsersPreferencesBody>
    </Background>
)
}
