import Title from "../components/TitleComponent"
import styled from "styled-components"
import oneDay from "../assets/images/oneDay.jpg"
import { useState } from "react"
export default function DescriptionBook(){
    const [book, setBook] = useState([oneDay])
    return(
        <>
            <Title />
            <DescriptionBookBody>
                <DescriptionImage>
                    <img src={book} alt='' />
                    <WantRead>
                        <h4> Desejo ler</h4>
                    </WantRead>
                </DescriptionImage>
                
                <DescriptionContent>
                    <h3> Título</h3>
                    <h3> Autor</h3>
                    <h4> Resenha</h4>
                </DescriptionContent>
            </DescriptionBookBody>
        </>
    )
}

const DescriptionBookBody = styled.div`
display: flex;


`

const DescriptionContent = styled.div`
    

`

const DescriptionImage = styled.div`
border:solid;
img{
margin-bottom: 20px;
width: 50vh;
}

`

const WantRead = styled.div`
margin: 0 auto;
width: 23vh;
height: 10vh;
border-radius: 10px;
background-color: #3cb371 	;
display: flex;
justify-content: center;
align-items: center;
h4{
font-size: 20px;
color:white;
}
`