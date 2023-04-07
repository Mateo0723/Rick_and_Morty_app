
const initialState = {
    myFavorites: []
}

const diffId = (char) => {
    return char.id !== 2
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        default:
            return { ...state }
        case "ADD_FAVOURITE_CARD":
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case "DELETE_FAVOURITE_CARD":
            return {
                ...state,
                myFavorites: state.myFavorites.filter({ diffId })
            }
    }
}

export default reducer;