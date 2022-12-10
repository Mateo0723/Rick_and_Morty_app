


export const addFavouriteCard = (char) => {
    return {
        type: "ADD_FAVOURITE_CARD",
        payload: char
    }
}
export const deleteFavouriteCard = (id) => {
    return {
        type: "DELETE_FAVOURITE_CARD",
        payload: id
    }
}