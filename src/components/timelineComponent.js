import styled from "styled-components"

export const TimelineBody = styled.div`
display: flex;
@media (max-width: 600px) {
    flex-direction: column;
  }
`
export const Sidebar = styled.div`
padding: 10px;
margin-left: 20px;
`

export const Goal = styled.div`
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

export const NextReading = styled.div`
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

export const GoalInfos = styled.div`
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

export const NextReadingInfo = styled.div`
display: flex;
justify-content: center;
align-items: center;
h3{
font-size: 20px;
}
`

export const Recomendations = styled.div`
margin-top: 10px;
border-radius: 20px;
margin-left: 60px;
padding: 10px;
background-color: #dcdcdc;
@media (max-width: 600px) {
    margin-left:30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
h2{
font-size:30px;
color: #8b4513;
margin-bottom: 20px;
}
`


export const RecomendationsGenre = styled.div`
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