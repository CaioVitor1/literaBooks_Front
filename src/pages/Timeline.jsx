import Title from "../components/TitleComponent";
import jobsBook from "../assets/images/jobs.jpg";
import { useEffect, useState } from "react";
import oneDay from "../assets/images/oneDay.jpg";
import LeftBar from "../components/LeftBarComponent";
import {TimelineBody, 
        RecomendationsGenre,
        Recomendations} from "../components/timelineComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RenderRecomendations({title, genre, image}){
    return(
        <RecomendationsGenre>
            <h4> {title} ({genre})</h4>
            <img src={image} alt=''/>
        </RecomendationsGenre>
    )
}

export default function Timeline(){
    const localToken = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${localToken}`
        }
    };
    console.log("o token é: ")
    console.log(localToken)
    const navigate = useNavigate()
    
   


    const [recomendationsOptions, setRecomendationsOptions] = useState([
        {genre:"biografia" ,title: "jobs", image: jobsBook},
        {genre:"biografia" ,title: "jobs", image: jobsBook},
        {genre:"biografia" ,title: "jobs", image: jobsBook},
        {genre:"romance" ,title: "Um dia", image: oneDay},
        {genre:"romance" ,title: "Um dia", image: oneDay},
        {genre:"romance" ,title: "Um dia", image: oneDay}
    ])

    return(
        <>
            <Title />
            <TimelineBody>
                <LeftBar />

                <Recomendations>
                    <h2> Leituras recomendadas para você! </h2>
                    {recomendationsOptions.map((option) => <RenderRecomendations title={option.title} genre={option.genre} image={option.image}  />)}
                </Recomendations>
                
            </TimelineBody>
        </>
    )
}