import { Sidebar, Goal, GoalInfos, NextReading, NextReadingInfo } from "./timelineComponent"
import { useState, useEffect } from "react";
import challange from "../assets/images/challange.jpg";
import nextReadingPicture from "../assets/images/nextReading.jpg";
import jobsBook from "../assets/images/jobs.jpg";
import axios from "axios";

export default function LeftBar(){
    const [next, setNext] = useState("a");
    const [countBooks, setCountBooks] = useState(2);
    const [title, setTitle] = useState("Steve Jobs");
    const localToken = localStorage.getItem("token");
    
    const config = {
        headers: {
            Authorization: `Bearer ${localToken}`
        }
    };
    useEffect(() => {
        getUsersInfo();
    }, []);

    async function getUsersInfo(){
        const promise = axios.get("http://localhost:5000/infos/users", config)
        promise
        .then(res => {
           
            setCountBooks(res.data.readingGoals);
            setNext(res.data.nextReading);
        })
        .catch(res => {
            console.log("deu ruim")
            alert("Você inseriu dados inválidos")
        }) 


    }
    return(
        <Sidebar>
                <Goal>
                    <h3> Desafio de leitura 2022</h3>
                    <GoalInfos>
                        <img src={challange} alt='' />
                        <h3> Meta de ler {countBooks} livros!</h3>
                    </GoalInfos>
                </Goal>
                    {(next !== "") && (
                        <NextReading>
                            <h3> Próxima leitura</h3>
                            <NextReadingInfo>
                                {(next === null || next === "") && (<h3> Você ainda não definiu qual a próxima leitura! :(</h3>)}
                                {(next !== null && next !== "") && (<> 
                                <img src={jobsBook} alt='' />
                                <h3> {title}</h3>
                                </>)}
                                
                            </NextReadingInfo>
                            
                        </NextReading>
                    )}
                     {(next === "") && (
                        <NextReading>
                            <h3> Próxima leitura! </h3>
                                <NextReadingInfo>
                                    <img src={nextReadingPicture} alt='' />
                                    <h3> Defina o próximo livro que você lerá!</h3>
                                </NextReadingInfo>
                            
                        </NextReading>
                    )}
            </Sidebar>
    )
}