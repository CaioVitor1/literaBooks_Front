import { Sidebar, Goal, GoalInfos, NextReading, NextReadingInfo } from "./timelineComponent"
import { useState } from "react";
import challange from "../assets/images/challange.jpg";
import nextReadingPicture from "../assets/images/nextReading.jpg";
import jobsBook from "../assets/images/jobs.jpg";

export default function LeftBar(){
    const [next, setNext] = useState("a");
    const [countBooks, setCountBooks] = useState(2);
    const [title, setTitle] = useState("Steve Jobs")
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
                                <img src={jobsBook} alt='' />
                                <h3> {title}</h3>
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