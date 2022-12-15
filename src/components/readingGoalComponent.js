import styled from 'styled-components';


export const ReadingGoalBody = styled.div`
margin-top: 70px;
display: flex;
justify-content: center;
align-items: center;

@media (max-width: 600px) {
    width: 90%;
  }
`;

export const ReadingGoalContent = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
flex-direction: column;
border:solid;
border-width: 1px;
background-color: white;
padding-bottom: 30px;
@media (max-width: 600px) {
    width: 80%;
  }
`;

export const Header = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h2{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #8b4513;
    @media (max-width: 600px) {
    font-size: 25px;
  }
}
h3{
    margin-top: 20px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    @media (max-width: 600px) {
   font-size:15px;
  }
}
`;

export const ChallangeBooks = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin:40px 0px;

h3{
font-family: 'Lato', sans-serif;
font-style: bold;
font-weight: 700;
font-size: 15px;
}
img{
width: 20%;
margin-right: 20px;
}
input{
width: 30px;
margin: 0px 5px;
}
`;