import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_ERROR
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispacth) => {
    dispacth({type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => dispacth({type: REQUEST_ROBOTS_SUCCESS, payload: data}))
            .catch(error => dispacth({type: REQUEST_ROBOTS_ERROR, payload: error}))
}
