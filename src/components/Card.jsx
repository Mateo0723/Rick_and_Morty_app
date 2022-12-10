import styles from "./Card.module.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFavouriteCard, deleteFavouriteCard } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();

   const handleFavourite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(deleteFavouriteCard(props.id));
      } else {
         setIsFav(true);
         dispatch(addFavouriteCard(props));
      }
   }

   const myFavorites = useSelector((state) => state.myFavorites)

   const id = props.id;

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.card}>
         {
            isFav ? (
               <button className={styles.button} onClick={handleFavourite}>❤️</button>
            ) : (
               <button className={styles.button} onClick={handleFavourite}>🤍</button>
            )
         }
         <button className={styles.button} onClick={() => { props.onClose(id) }}>X</button>
         <Link to={`/detail/${id}`}>
            <h2>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <img src={props.image} alt="" />
      </div>
   );
}
