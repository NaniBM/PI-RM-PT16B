import style from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(
   {
      id,
      onClose,
      name,
      status,
      species,
      gender,
      origin,
      image,
      addFavChar,
      removeFavChar,
      myFavoriteCards
   }
) {

   const [ isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFavChar(id)
      } else {
         setIsFav (true);
         addFavChar({
            id,
            onClose,
            name,
            status,
            species,
            gender,
            origin,
            image,
         });
      }
   }

   useEffect(() => {
      myFavoriteCards.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavoriteCards]);

   return (
      <div className={style.card} key={id}>
         <div>
            <button className={style.boton} onClick={() => onClose(id)}>Close carta {id}</button>
         </div>
         <div className={style.info}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
            <Link to={`/detail/${id}`} >
               <h3 className="card-name">{name}</h3>
            </Link>
            <h2>Estado: {status}</h2>
            <h2>Especie: {species}</h2>
            <h2>Genero: {gender}</h2>
            <h2>From: {origin}</h2>
         </div>
         <div className={style.cont}>
            <img className={style.imagen} src={image} alt='' />
         </div>
      </div>
   );
}


export function mapDispatchToProps(dispatch) {
   return {
      addFavChar: (char) => dispatch(addFav(char)),
      removeFavChar: (id) => dispatch(removeFav(id))
   }  
}

export function mapStateProps(state) {
   return {
      myFavoriteCards: state.myFavorites 
   }  
}

export default connect(mapStateProps, mapDispatchToProps)(Card)
