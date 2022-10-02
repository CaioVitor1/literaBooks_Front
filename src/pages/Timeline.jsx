import Title from "../components/Title";
import challange from "../assets/images/challange.jpg";
import jobsBook from "../assets/images/jobs.jpg";
import nextReadingPicture from "../assets/images/nextReading.jpg";
import oneDay from "../assets/images/oneDay.jpg";
import { useState } from "react";
import {TimelineBody, 
        RecomendationsGenre,
        LeftBar, 
        Goal, 
        GoalInfos,
        NextReading,
        NextReadingInfo,
        Recomendations} from "../components/timelineComponent"

function RenderRecomendations({title, genre, image}){
    return(
        <RecomendationsGenre>
            <h4> {title} ({genre})</h4>
            <img src={image} alt=''/>
        </RecomendationsGenre>
    )
}

export default function Timeline(){
    const [countBooks, setCountBooks] = useState(2)
    const [next, setNext] = useState("a")
    const [title, setTitle] = useState("Steve Jobs")
    const [recomendationsOptions, setRecomendationsOptions] = useState([
        {genre:"biografia" ,title: "jobs", image: jobsBook},
        {genre:"biografia" ,title: "jobs", image: jobsBook},
        {genre:"biografia" ,title: "jobs", image: jobsBook},
        {genre:"romance" ,title: "Um dia", image: oneDay},
        {genre:"romance" ,title: "Um dia", image: oneDay},
        {genre:"romance" ,title: "Um dia", image: oneDay},
    ])
    return(
        <>
            <Title />
            <TimelineBody>
            <LeftBar>
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
            </LeftBar>

            <Recomendations>
                <h2> Leituras recomendadas para você! </h2>
                {recomendationsOptions.map((option) => <RenderRecomendations title={option.title} genre={option.genre} image={option.image}  />)}
            </Recomendations>
        </TimelineBody>
        </>
    )
}