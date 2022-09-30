import { useNavigate } from "react-router-dom";
import styled from "styled-components"
export default function Title(){
    const navigate = useNavigate();
    return(
        <TitleBody>
            <h2>Litera<span>Books</span></h2>
            <Auth>
                <h4 onClick={() => navigate("/signin")}>  Login</h4>
                <h4 onClick={() => navigate("/signup")}> Cadastro</h4>
            </Auth>   
        </TitleBody>
    )
        
}

const TitleBody = styled.div`
margin-left: 50px;
border:solid;
padding-bottom: 30px;
border-width: 1px 0px;
display: flex;
justify-content: space-between;
align-items: center;
h2{
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-size: 50px;
    font-weight: 200;
    color: #8b4513;
}
span{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 50px;
    font-weight: 100;
}
`
const Auth = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
width: 500px;
padding-top: 30px;
h4{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 25px;
    font-weight: 200;
    color: #8b4513;
    margin-bottom: 20px;
   
}
`