import styled from 'styled-components';

export const TimelineBody = styled.div`
padding-top: 40px;
display: flex;
background: rgb(238,174,213);
background: linear-gradient(90deg, rgba(238,174,213,0.5620448008304885) 0%, rgba(148,187,233,1) 58%); 
@media (max-width: 600px) {
    width: 100%;
  }
`;
export const Sidebar = styled.div`
padding: 10px;
margin-left: 20px;
width: 25%;
@media (max-width: 600px) {
  margin-left: 0px;
   width:40%;
   display: flex;
   flex-direction: columns;
  }
`;

export const Goal = styled.div`
padding: 10px;
border-width: 0px 0px 1px 0px;
margin-bottom: 10px;
background-color: white;
border-radius: 20px;
width: 100%;
h3{
font-size: 20px;
margin:10px;
}
`;

export const NextReading = styled.div`
padding: 10px;
background-color: white;
border-radius: 20px;
width: 100%;
@media (max-width: 600px) {

  }
h3{
font-size: 20px;
margin:10px;
}
`;

export const GoalInfos = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 10px;
@media (max-width: 600px) {
    flex-direction: column;
  }
img {
width: 100%;
height: 100%;
margin: 20px 10px 20px 10px;
}    
h3{
font-size: 15px;
}
`;

export const NextReadingInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
@media (max-width: 600px) {
  flex-direction: column;
  }
h3{
font-size: 15px;
}
img{
  width: 100%;
  height: 100%;
  
}
`;

export const Recomendations = styled.div`
margin-top: 10px;
border-radius: 20px;
margin-left: 60px;
padding: 10px;
background-color: white;
width: 55%;

@media (max-width: 600px) {
    border:solid;
    border-color:#8b4513;
    border-width: 1px;
    margin-left:0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
h2{
margin: 10px 0px;
font-size:30px;
color: black;
margin-bottom: 20px;
}
`;


export const RecomendationsGenre = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: solid;
border-color: black;
border-width: 0px 0px 3px 0px;
border-radius: 0px;
@media (max-width: 600px) {
  
  }
img{
width:60%;
height: 60%;
margin-bottom: 30px;
@media (max-width: 600px) {
  width:80%;
  height: 80%;
}
}
h3{
margin: 10px 0px;
font-size: 25px;
color: gray;
@media (max-width: 600px){
  
}
}
h4{
margin: 10px 0px;
font-size: 25px;
color: black;
@media (max-width: 600px){
  font-size: 20px;
}
}
`;

export const GenreName = styled.div`

`;