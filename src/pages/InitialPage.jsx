import pascal from "../assets/images/pascal.jpeg"
import thumb from "../assets/images/thumb.jpg";
import Title from "../components/TitleComponent";
import { InitialPageBody, Main, Image, Footer, Options, Citations } from "../components/InitialPageComponent";

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
                <Citations>
                    <h3> “Os melhores livros são aqueles que os leitores gostariam de ter escrito”</h3>
                    <h4> Blaise Pascal </h4>
                </Citations>
                
            </Footer>
            </InitialPageBody>
    )
}









