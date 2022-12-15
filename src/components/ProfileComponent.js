import styled from 'styled-components';

export const ProfileContent = styled.div`
display: flex;
width: 80%;
margin:0 auto;
border-radius: 20px;
background-color: #e6e6fa;
@media (max-width: 600px) {
   width: 70%;
  }
`;

export const ProfileBody = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 0 auto;
@media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    padding-bottom: 10px;
  }
img{
    width: 70%;
    height: 70%;
    border-radius: 100px;
    padding:10px;
}
`;

export const ProfileInfos = styled.div`
margin-left: 40px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;
@media (max-width: 600px){
        
    }
h2{
font-size: 30px;
@media (max-width: 600px){
        font-size: 25px;
    }
}  
h3{
font-size: 20px;
@media (max-width: 600px){
        font-size: 17px;
    }
}

`;

export const ReviewsProfile = styled.div`
margin-top: 30px;
display: flex;
flex-direction: column;

`;
export const NewReading = styled.div`
background-color: #8b4513;
border:solid;
border-width: 2px;
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0px 0px 0px;
width: 30%;
height: 40px;
border-radius: 30px;
background: rgb(238,174,213);
background: linear-gradient(90deg, rgba(238,174,213,0.5620448008304885) 0%, rgba(148,187,233,1) 58%); 
@media (max-width: 600px) {
    width: 60%;
    margin: 0 auto;
    display:none
  }
`;


export const MybookBody = styled.div`
    display: flex;
    @media (max-width: 600px) {
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

`;
export const Content = styled.div`
margin: 0 auto;
width: 65%;
border-width: 1px;

@media (max-width: 600px){
    width: 60%;
   
}
h3{
   display: flex;
   justify-content: center;
   margin-top: 0px;
   &:first-child{
    font-size: 30px;
    color: #8b4513;
    margin: 5px 0px 20px 0px;
    @media (max-width: 600px){
        font-size: 20px;
    }
   }
}

`;
export const Reviews = styled.div`
    border:solid;
    border-color: gray;
    border-radius: 10px;
    border-width: 1px 0px 1px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    h3{
        margin: 0px 0px;
        font-size: 30px;
        @media (max-width: 600px){
        font-size: 20px;
    }
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
    
`;

export const AddReadingProfile = styled.div`
background-color: #8b4513;
border:solid;
display: flex;
justify-content: center;
align-items: center;
border-width: 2px;
margin: 20px 0px 0px 0px;
width: 40%;
height: 40px;
border-radius: 30px;
background: rgb(238,174,213);
background: linear-gradient(90deg, rgba(238,174,213,0.5620448008304885) 0%, rgba(148,187,233,1) 58%); 
margin: 0 auto;
@media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
  }
`;

export const WithoutReview = styled.div`
    padding-left:20px;
`;