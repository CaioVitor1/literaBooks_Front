import styled from "styled-components"
import Title from "../components/Title"
import challange from "../assets/images/challange.jpg"
import jobsBook from "../assets/images/jobs.jpg"
import nextReadingPicture from "../assets/images/nextReading.jpg"
import oneDay from "../assets/images/oneDay.jpg"
import { useState } from "react"


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

const TimelineBody = styled.div`
display: flex;
`

const LeftBar = styled.div`
padding: 10px;
margin-left: 20px;
`

const Goal = styled.div`
padding: 10px;
border:solid;
border-color: gray;
border-width: 0px 0px 1px 0px;
margin-bottom: 30px;
background-color: #dcdcdc;
border-radius: 20px;
h3{
font-size: 20px;
margin:10px;
}
`

const NextReading = styled.div`
padding: 10px;
border:solid;
border-color: gray;
background-color: #dcdcdc;
border-radius: 20px;
border-width: 0px 0px 1px 0px;
img{
width: 150px;
height: 150px;
margin: 20px 10px 20px 10px;
}
h3{
font-size: 20px;
margin:10px;
}

`
const GoalInfos = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
img {
width: 150px;
height: 150px;
margin: 20px 10px 20px 10px;
}    
h3{
font-size: 20px;
}
`

const NextReadingInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
h3{
font-size: 20px;
}
`

const Recomendations = styled.div`
margin-top: 10px;
border-radius: 20px;
margin-left: 60px;
padding: 10px;
background-color: #dcdcdc;
h2{
font-size:30px;
color: #8b4513;
margin-bottom: 20px;
}
`

const RecomendationsGenre = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid;
border-color: gray;
border-width: 1px 0px;
border-radius: 20px;

img{
width: 250px;
height: 350px;
margin-bottom: 30px;
}
h3{
margin: 10px 0px;
font-size: 25px;
color: gray;
}
h4{
margin: 10px 0px;
font-size: 25px;
color: gray;
}
`