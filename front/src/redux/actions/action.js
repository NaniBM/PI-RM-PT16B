import { ADD_FAV, REMOVE_FAV } from "./types";

export const addFav = (id) => {
    return {
        type: ADD_FAV,
        payload: id
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}