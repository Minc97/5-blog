import dataProvider from "../apis/dataProvider";

export const fetchPosts = () => async (dispatch: any) => {
    const response = await dataProvider.get('./posts');
    dispatch({type: 'FETCH_POSTS', payload: response})
};
/*
// Longer version of up code
export const fetchPosts = () => {
    return async (dispatch: any) => {
        const response = await dataProvider.get('./posts');
        dispatch({type: 'FETCH_POSTS', payload: response})
    }
};
 */
/*
     // Bad approach! (approach - podejście)
    export const fetchPosts = async () => {
    const response = await dataProvider.get('./posts');

    return {
        type: 'FETCH_POSTS',
        payload: response
    };
*/