import _ from 'lodash';
import dataProvider from "../../apis/dataProvider";

/*
export const fetchUser = (id: number) => (dispatch: any) => {
    _fetchUser(id, dispatch)
};
 */


/* // Pierwsze rozwiązanie: funkcja memoize do pojedynczego fetch z api
export const fetchUser = (id: number) => (dispatch: any) => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id: any, dispatch: any) => {
    const response = await dataProvider.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
});

 */

export const fetchUser = (id: number) => async (dispatch: any) => {
    const response = await dataProvider.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};

/*
_.chain(getState().posts)
    .map()
    .uniq()
    .forEach()
    .value()
 */