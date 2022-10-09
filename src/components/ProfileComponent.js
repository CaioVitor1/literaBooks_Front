import styled from "styled-components";

export const ProfileContent = styled.div`
display: flex;
margin-left: 60px;
border:solid;
border-radius: 20px;
background-color: #e6e6fa;
`

export const ProfileBody = styled.div`
display:flex;
align-items: center;
justify-content: center;
margin: 0 auto;
img{
    width: 30vh;
    height: 30vh;
    border-radius: 100px;
    border:solid;
}
`

export const ProfileInfos = styled.div`
margin-left: 40px;
display: flex;
flex-direction: column;
align-items: center;

h2{
font-size: 30px;
}  
h3{
font-size: 20px;
}
`

export const ReviewsProfile = styled.div`
margin-top: 30px;
`

export const NewReading = styled.div`
margin: 30px 20px;
background-color: #3cb371;
width: 35vh;
height: 7vh;
border-radius: 10px;
background-color: #3cb371;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 600px) {
    margin: 0 auto;
  }
h4{
font-size: 20px;
color:white;
}

`

export const MybookBody = styled.div`
    display: flex;
    @media (max-width: 600px) {
    flex-direction: column;
  }
h2{
    margin: 40px 0px;
    font-style: normal;
    font-size: 25px;
    color: gray;
   
}
>h3{
    margin-top: 50px;
    font-style: normal;
    font-size: 30px;
    color: #8b4513
}

`
export const Content = styled.div`
margin-left: 20px;
h3{
   display: flex;
   justify-content: center;
   &:first-child{
    font-size: 30px;
    color: #8b4513;
    margin: 5px 0px 20px 0px;
   }
}

`
export const Reviews = styled.div`
    border:solid;
    border-color: gray;
    border-radius: 10px;
    border-width: 1px 0px 1px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #dcdcdc;
    h3{
        margin: 20px 0px;
        font-size: 30px;
        
    }
    img{  
        margin-top: 10px;
        width: 30%;
        height: 30%;
    }
    h4{
        font-size: 20px;
        &:last-child{
            color:blue;
            margin: 10px 0px;
        }
    }
    
`