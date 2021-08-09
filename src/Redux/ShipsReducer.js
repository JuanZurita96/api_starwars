import axios from 'axios';

const initialState = {
    ships: []
}
const GET_SHIPS = 'GET_SHIPS';

export default function shipReducer(state = initialState, action) {
    switch(action.type){
        case GET_SHIPS:
            return {
                ...state,
                ships: action.payload
            }
        default:
            return state
    }
};

export const getShips = () => async dispatch => {
    try{
        let res = await Promise.all([
            axios.get('https://swapi.dev/api/starships/'),
            axios.get('https://swapi.dev/api/starships/?page=2'),
            axios.get('https://swapi.dev/api/starships/?page=3'),
            axios.get('https://swapi.dev/api/starships/?page=4')
        ]);
        let data = [];
        data = data.concat(res[0].data.results,res[1].data.results,res[2].data.results,res[3].data.results);
        dispatch({
            type: GET_SHIPS,
            payload: data
        })
    }catch(err){
        console.log(err);
    }
}