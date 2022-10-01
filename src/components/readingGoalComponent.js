import styled from "styled-components";

export const ReadingGoalBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Header = styled.div`
margin-top: 40px;
display: flex;
flex-direction: column;
align-items: center;
h2{
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    color: #8b4513;
}
h3{
    margin-top: 20px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
}
`

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
width: 200px;
height: 200px;
margin-right: 20px;
}
input{
width: 30px;
margin: 0px 5px;
}
`