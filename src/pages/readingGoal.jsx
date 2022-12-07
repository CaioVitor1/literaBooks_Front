import challange from "../assets/images/challange.jpg"
import { useEffect, useState } from "react";
import { Button } from "../components/authComponent";
import { ReadingGoalBody, Header, ChallangeBooks } from "../components/readingGoalComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ReadingGoal(){
    const [count, setCount] = useState("");
    const navigate = useNavigate()
    const localToken = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${localToken}`
        }
    };

    function sendCount() {
        const countNumber = parseInt(count)
        const fractionalNumber = count%1
       
        if(isNaN(countNumber) || countNumber <= 0 || fractionalNumber !== 0){
            alert("Por favor, preencha sua meta de leitura com números inteiros e positivos!")
        } else{
         let body = {
            readingGoals: countNumber
         }   
            
        const promise = axios.post("https://litera-books-back.vercel.app/preferences/readingGoals", body, config)
        promise
        .then(res => {
           
            navigate('/timeline');
        })
        .catch(res => {
           
            alert("Você inseriu dados inválidos")
        }) 
         
    }
}

    return(
        <>
            <ReadingGoalBody>
            <Header>
                <h2> Inclua uma meta de leitura anual!</h2>
                <h3> Aqui vai um desafio! Compartilhe com a gente sua meta de leitura e nos deixe
                    ajudá-lo a alcança seu objetivo! 😊
                </h3>
            </Header>
            <ChallangeBooks>
                <img src={challange} alt='' />
                <h3>Eu quero ler </h3> <input type="textarea" onChange={(e) => setCount(e.target.value)} value={count}/> <h3> livros em 2022</h3>
            </ChallangeBooks>
            <Button onClick={sendCount}> Ir para tela inicial</Button>
        </ReadingGoalBody>
    </>
    )
}

