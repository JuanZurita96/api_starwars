import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import FilmsReducer from './FilmsReducer';
import ShipsReducer from './ShipsReducer';

const rootReducer = combineReducers({
    films: FilmsReducer,
    ships: ShipsReducer
})

export default function generateStore() {
    const store = createStore(rootReducer, compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
    return store;
}
