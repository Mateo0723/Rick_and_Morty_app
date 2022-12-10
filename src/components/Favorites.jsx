import React from "react";
import { useSelector } from "react-redux";
import styles from "./Card.module.css"

const Favorites = () => {

    const myFavorites = useSelector((state) => state.myFavorites)

    return (<>
        {myFavorites.map(e =>
            <div className={styles.card}>
                <h2>{e.name}</h2>
                <h2>{e.species}</h2>
                <h2>{e.gender}</h2>
                <img src={e.image} alt="" />
            </div>)}
    </>
    );
}

export default Favorites;