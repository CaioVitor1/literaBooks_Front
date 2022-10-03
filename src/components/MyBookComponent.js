import styled from "styled-components";

export const MybookBody = styled.div`
    display: flex;
h2{
    margin-top: 200px;
    font-style: normal;
    font-size: 30px;
    color: gray
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