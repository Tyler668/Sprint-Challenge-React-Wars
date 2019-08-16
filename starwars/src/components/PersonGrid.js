import React, { useEffect, useState } from "react";
import axios from "axios";
import PersonCard from "./PersonCard";
import styled from "styled-components";

//DMNFSOPFJMDSMFPSFM

const GridContainer = styled.div`
display: flex;
justify-content: center;
align content: center;
height: 100vh;

`;

const PersonGrid = () => {
    let [personInfo, setPersonInfo] = useState([]);
    // let [url, setUrl] = useState('https://swapi.co/api/people/?page=1');
    let allPeople = [];

    let otherArray = [];

    

    
    useEffect(() => {

        for (let i = 1; i < 10; i++) {
            axios
                .get(`https://swapi.co/api/people/?page=${i}`)
                .then(r => {
                    const people = r.data.results;
                    people.forEach(item => {
                        allPeople.push(item);
                        
                    });
                    setPersonInfo(allPeople);
                });
        };

        
    }, []);



    return (
        <GridContainer>
            {personInfo.map(personItem => (
                <PersonCard person={personItem} />
            ))}
        </GridContainer>

    );


}



export default PersonGrid;