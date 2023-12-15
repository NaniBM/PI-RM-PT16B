import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./types";

// export const addFav = (id) => {
//     return {
//         type: ADD_FAV,
//         payload: id
//     }
// }

// ACTION | addFav
export const addFav = (character) => {
    console.log("char: ", character)
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
                type: ADD_FAV,
                payload: data,
            });
        });
    };
};

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
           console.log('delete: ', data)
            return dispatch({
                type: REMOVE_FAV,
                payload: data,
            });
        });
    };
};


export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (orden) => {
    return {
        type: ORDER,
        payload: orden
    }
}