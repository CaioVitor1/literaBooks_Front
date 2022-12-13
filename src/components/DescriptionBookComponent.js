import styled from "styled-components";

export const DescriptionBookBody = styled.div`
display: flex;
@media (max-width: 600px) {
    flex-direction: column;
  }
h3{
font-size: 25px;
margin-top: 10px;
    &:first-child{
        font-size: 40px;
    }
}
h4{
margin: 30px;
text-align: justify;
padding: 20px;
}

`

export const DescriptionContent = styled.div`
margin-left: 30px;
display: flex;
flex-direction: column;
align-items: center;

width: 100%;

`

export const DescriptionImage = styled.div`
margin: 0 auto;
width: 50%;

img{
margin: 0 auto;
margin-bottom: 20px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
  width: 90%;
  margin: 0 auto;
  }
}

`

export const WantRead = styled.div`
margin: 0 auto;
width: 35vh;
height: 7vh;
border-radius: 10px;
background-color: #3cb371;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
    margin-top: 30px;
  }
h4{
font-size: 20px;
color:white;
}
`

export const Book = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;

`

export const Genres = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
h4{
font-size:20px;
color:green;
margin:0px;
}
h5{
font-size:18px;
display: flex;
justify-content: center;
align-items: center;
text-decoration: underline;
text-decoration-color: green;
margin: 5px 0px;
}
`