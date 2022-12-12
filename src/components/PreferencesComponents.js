import styled from "styled-components";

export const PreferencesBody = styled.div`
width: 70%;
margin:0 auto;
`;

export const Header = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h2{
	font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 30px;
	color: #8b4513;
}
h3{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 80px;
	background-color: #90ee90;
	margin-top:30px;
	font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 20px;
	color: black;
	border-radius: 20px;
	border-color: red;
	padding-left: 20px;
	@media (max-width: 600px) {
		font-size: 17px;
	}
}
`;

export const Options = styled.div`
margin-top: 40px;
display: flex;
flex-wrap: wrap;
h4{
	margin: 10px;
}
`

export const Choice = styled.div`
margin-right: 10px;
display: flex;
border:solid;
border-width:1px;
width: 50%;
margin: 0 auto;
background-color: #e6e6fa;
`

export const Finalizing = styled.div` 
margin-top: 40px;
display: flex;
align-items: center;
justify-content: center;


h3{
	background-color: #e6e6fa;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
}
button{
	height: 50px;
	background: rgb(238,174,213);
	background: linear-gradient(90deg, rgba(238,174,213,0.5620448008304885) 0%, rgba(148,187,233,1) 58%); 
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Lato', sans-serif;
    font-style: normal;
    font-size: 20px;
	border-radius: 10px;
}
`