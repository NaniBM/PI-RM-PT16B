import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "../actions/types";

const initialState = {
    allCharacters: [],
    myFavorites: [],
}

const rootReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== Number(action.payload))
            }
        case FILTER:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
            }
        case ORDER:
            // const orderedChars = state.allCharacters.sort((a, b) => {
            //     if (a.id < b.id) {
            //       return payload === 'A' ? -1 : 1;
            //     }
            //     if (a.id > b.id) {
            //       return payload === 'A' ? 1 : -1;
            //     }
            //     return 0;
            // })
            const orderedChars = state.myFavorites.toSorted((a, b) => {
                if (action.payload === "A") return a.id - b.id;
                if (action.payload === "D") return b.id - a.id;
                return 0;
            });
            return {
                ...state,
                myFavorites: orderedChars,
            };
        default:
            return { ...state }
    }
}

export default rootReducer;