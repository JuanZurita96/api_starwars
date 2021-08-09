import axios from 'axios';

const initialState = {
    films: []
}
const GET_FILMS = 'GET_FILMS';

export default function filmReducer(state = initialState, action) {
    switch(action.type){
        case GET_FILMS:
            return {
                ...state,
                films: action.payload
            }
        default:
            return state
    }
};

export const getFilms = () => async dispatch => {
    try{
        let res = await axios.get('https://swapi.dev/api/films');
        dispatch({
            type: GET_FILMS,
            payload: res.data.results
        })
    }catch(err){
        console.log(err);
    }
}