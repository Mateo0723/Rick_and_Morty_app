import React from "react";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";



const Detail = (props) => {

    const { id } = useParams();
    console.log(id);

    const [character, setCharacter] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/character/${id}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert('No hay personajes con ese ID');
            });
        return setCharacter({});
    }, [id]);

    return (
        <div>
            <img src={character.image} alt={character.name}></img>
            <h1>Name: {character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2>Origin: {character.origin?.name}</h2>
            <h2>Location: {character.location?.name}</h2>
        </div>
    )
}

export default Detail