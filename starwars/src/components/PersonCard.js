import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
display: flex;
justify-content: center;
flex-flow: row wrap;
color: white;
width: 10%;
height: 10%;
`;

const NameWrapper = styled.h2`
display: flex;
justify-content: space around;
padding: 2%;
background: seagreen;
border-radius: 10px;
box-shadow: inset 0 0 10px #000000;

`;

const PersonCard = (props) =>{
console.log('props: '+ props.person);
    return(
        <CardWrapper>
            <NameWrapper>Name: {props.person.name}</NameWrapper>
        </CardWrapper>
    );
}


export default PersonCard;