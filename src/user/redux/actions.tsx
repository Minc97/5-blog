import dataProvider from "../../apis/dataProvider";

export const fetchUser = (id: number) => async (dispatch: any) => {
    const response = await dataProvider.get(`/users/${id}`);
    dispatch({type: 'FETCH_USER', payload: response.data});
};