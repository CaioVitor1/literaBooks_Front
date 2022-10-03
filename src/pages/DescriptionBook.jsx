import Title from "../components/TitleComponent";
import {Book,
        DescriptionBookBody, 
        DescriptionContent,
        Genres,
        WantRead,
        DescriptionImage} from "../components/DescriptionBookComponent";
import oneDay from "../assets/images/oneDay.jpg";
import { useState } from "react";
export default function DescriptionBook(){
    const [book, setBook] = useState([oneDay]);

    function addBook(){
        console.log("add")
    }
    return(
        <>
            <Title />
            <DescriptionBookBody>
                <DescriptionImage>
                    <img src={book} alt='' />
                    <WantRead onClick={addBook}>
                        <h4> Desejo ler</h4>
                    </WantRead>
                </DescriptionImage>
                
                <DescriptionContent>
                    <Book>
                        <h3> Um dia</h3>
                        <h3> David Nichols</h3>
                        <h4> Dexter Mayhew e Emma Morley se conheceram em 1988. Ambos sabem que no dia seguinte,
                            após a formatura na universidade, deverão trilhar caminhos diferentes. Mas, depois de 
                            apenas um dia juntos, não conseguem parar de pensar um no outro.
                            Os anos se passam e Dex e Em levam vidas isoladas - vidas muito diferentes daquelas que eles
                            sonhavam ter. Porém, incapazes de esquecer o sentimento muito especial que os arrebatou 
                            naquela primeira noite, surge uma extraordinária relação entre os dois.
                            Ao longo dos vinte anos seguintes, flashes do relacionamento deles são narrados, um por ano,
                            todos no mesmo dia: 15 de julho. Dexter e Emma enfrentam disputas e brigas, esperanças e
                            oportunidades perdidas, risos e lágrimas. E, conforme o verdadeiro significado desse dia
                            crucial é desvendado, eles precisam acertar contas com a essência do amor e da própria
                            vida.</h4>
                    </Book>
                    <Genres>
                        <h4> Outros gêneros: </h4>
                        <h5> Biografia</h5>
                        <h5> Romance</h5>
                        <h5> Infantil</h5>
                        <h5> Mangás</h5>
                        <h5> Mistério</h5>
                        <h5> Ficção</h5>
                        <h5> Suspense</h5>
                        <h5>Ciências </h5>
                        <h5> Espiritual </h5>
                    </Genres>
                    
                </DescriptionContent>
            </DescriptionBookBody>
        </>
    )
}

