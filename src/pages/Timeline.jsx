import styled from "styled-components"
import Title from "../components/Title"
import challange from "../assets/images/challange.jpg"
import jobsBook from "../assets/images/jobs.jpg"
import nextReadingPicture from "../assets/images/nextReading.jpg"
import { useState } from "react"
export default function Timeline(){
    const [countBooks, setCountBooks] = useState(2)
    const [next, setNext] = useState("a")
    const [title, setTitle] = useState("Steve Jobs")
    return(
        <>
            <Title />
            <TimelineBody>
            <Sugestions>
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
                    
                
            </Sugestions>

            <Recomendations>
                <h3> Recomendações para você</h3>
            </Recomendations>
        </TimelineBody>
        </>
    )
}

const TimelineBody = styled.div`
border:solid;
display: flex;
`

const Recomendations = styled.div`
border:solid;
border-color: red;
`

const Sugestions = styled.div`
border:solid;
`

const Goal = styled.div`
border:solid;
h3{
font-size: 20px;
margin:10px;
}
`

const NextReading = styled.div`
border:solid;
img{
width: 150px;
height: 150px;
margin: 0px 10px;
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
margin: 0px 10px;
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