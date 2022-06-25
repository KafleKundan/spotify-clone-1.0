export const initialState = {
    token: null,
    user : null,
    playlists: [],
    playing: false,
    item : null,
}
const reducer = (state, action)=>{
    console.log(action)

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
        default:
            return state
    }
}
export default reducer