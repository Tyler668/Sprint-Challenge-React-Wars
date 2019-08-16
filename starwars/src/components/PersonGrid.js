import React, { useEffect, useState } from "react";
import axios from "axios";
// import PersonCard from "./PersonCard";



const PersonGrid = () => {
    const [personInfo, setPersonInfo] = useState([]);

    useEffect(() =>
        axios
            .get(`https://swapi.co/api/people/`)
            .then(res => {
                console.log(res);
                const personInfo = res;
                setPersonInfo(personInfo);
            }), []);

    // return <PersonCard />;

}

export default PersonGrid;