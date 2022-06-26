export const initialState = {
    token: null,
    user : null,
    playlists: [],
    playing: false,
    item : null,
    // Remove at production
    // token:"BQD_fNcEuAtcR5kfJ0wW-C8mGTILazbvzGPauCRDP17Y0V-uNij5EUdAe7GEfO_D4uedMw3cUcYx-UYMqMJ4L2rRIdM37bymq7pMFAFACijLiV_WJBcWNG494XVSPrOoJMZzPjGR05yMxsLb4dUly8nMPWT98OyOYm4B-s3-PVYkultOLTERcnATdMxye8wAH1S1g-9GAdtf-9Dc",
}
const reducer = (state, action)=>{

    // Action has two values 
    // Action => type, [payload(or value)]
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            }
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            }
        default:
            return state
    }
}
export default reducer