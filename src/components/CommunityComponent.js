import styled from "styled-components";

export const CommunityBody = styled.div`
h2{
font-size: 30px;
color: #8b4513;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
}

`

export const Users = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 30px;

`

export const UserProfile = styled.div`
background-color: #dcdcdc;
width: 60%;
border-radius: 20px;
display: flex;
padding: 20px;
@media (max-width: 600px) {
    flex-direction: column;
  }
img{
margin: 0 auto;
width: 20vh;
height: 20vh;

border-radius: 100px;
}
`

export const UserProfileInfos = styled.div`
margin-top:10px;
display: flex;
flex-direction: column;
align-items: center;
h3{
font-size: 25px;
margin-bottom: 10px;
}
h4{
font-size:20px;
}
h5{
margin-top: 60px;
color:blue;
font-size: 15px;
}
`