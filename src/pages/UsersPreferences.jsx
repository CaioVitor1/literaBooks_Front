import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Background, Next, UsersPreferencesBody, UsersPreferencesContent } from "../components/UsersPreferencesComponents"
import axios from "axios";
import favoriteBookImage from "../assets/images/favoritebook.jpg";
import { Submit } from "../components/authComponent";

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
        const promise = axios.post("https://litera-books-back.vercel.app/preferences/userspreferences", body, config)
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
    <UsersPreferencesContent>
        <img src={favoriteBookImage} alt='' />
        <h2> Conte-nos um pouco mais sobre você!</h2>

        <h3> Qual seu livro preferido?</h3>
        <input type="text" value={favoriteBook} onChange={(e) => setFavoriteBook(e.target.value)} placeholder="Livro favorito" />
       
        <h3> Qual seu autor preferido?</h3>
        <input type="text" value={favoriteAuthor} onChange={(e) => setFavoriteAuthor(e.target.value)} placeholder="Livro favorito" />
    
        <Submit onClick={(sendPrerences)}>
            <h4> Ir para próxima página! </h4>
        </Submit>
    </UsersPreferencesContent>
    </Background>
    
)
}
