import styled from "styled-components";
import pascal from "../assets/images/pascal.jpeg"
import thumb from "../assets/images/thumb.jpg";
import Title from "../components/Title";

export default function InitialPage(){

    return (
        <InitialPageBody>
            <Title />
            <Main>
                <h2>Nos conte mais sobre </h2>
                <h2> seu livro favorito!</h2>     
            </Main>
            <Image>
                 <img src={thumb} alt='1000' />
                 <Options>
                    <h3> 🔖 Compartilhe suas opiniões sobre seus livros preferidos!</h3>
                    <h3> 🔖 Faça parte de uma comunidade literária!</h3>
                    <h3> 🔖 Encontre novos livros de acordo com seus gostos! </h3>
                    <h3> 🔖 Defina uma meta de leitura anual!</h3>
                 </Options>
            </Image>
            <Footer>
                <img src={pascal} alt='' />
                <h3> “Os melhores livros são aqueles que os leitores gostariam de ter escrito”</h3>
            </Footer>
            </InitialPageBody>
    )
}

const InitialPageBody = styled.div`
background-color: #fff0f5;
padding: 20px;

`
const Main = styled.div`
margin-top:50px;
margin-left: 200px;
border:solid;
margin-bottom: 50px;
border-width: 1px 0px;
h2{
    
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 60px;
    font-weight: 200;
    color: #8b4513;
}
`

const Image = styled.div`

border-width: 1px;
width: 100%;
display:flex;
img{   
    width: 70%;
}
`

const Options = styled.div`
margin:20px 0px 0px 10px;
display: flex;
flex-direction: column;
justify-content: center;

h3{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 23px;
    font-weight: 200;
    color: #8b4513;
    margin-bottom: 20px;
}
   
`

const Footer = styled.div` 
margin-top: 50px;
display: flex;
align-items: center;

width: 30%;
img{
    width: 100px;
    height: 100px;
}
h3{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 20px; 
    color: black;
    margin-left: 20px;
}
`