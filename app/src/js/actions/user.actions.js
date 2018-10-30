import { REGISTER, LOGIN, LOGOUT, USERS_GETALL, USERS_DELETE } from '../constants/user.constans';
import { userService } from '../services/user.service';
import { history } from '../store';



const login = (username, password) => {
    const request = (user) => { return { type: LOGIN.REQUEST, user } }
    const success = (user) => { return { type: LOGIN.SUCCESS, user } }
    const failure = (error) => { return { type: LOGIN.FAILURE, error } }

    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));

                }
            );
    };


}

const logout = () => {
    userService.logout();
    return { type: LOGOUT.SUCCESS };
}

const register = (user) => {
    const request = (user) => { return { type: REGISTER.REQUEST, user } }
    const success = (user) => { return { type: REGISTER.SUCCESS, user } }
    const failure = (error) => { return { type: REGISTER.FAILURE, error } }
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');

                },
                error => {
                    dispatch(failure(error));

                }
            );
    };


}

const getAll = () => {
    const request = () => { return { type: USERS_GETALL.REQUEST } }
    const success = (users) => { return { type: USERS_GETALL.SUCCESS, users } }
    const failure = (error) => { return { type: USERS_GETALL.FAILURE, error } }

    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };


}

const _delete = (id) => {
    const request = (id) => { return { type: USERS_DELETE.REQUEST, id } }
    const success = (id) => { return { type: USERS_DELETE.SUCCESS, id } }
    const failure = (id, error) => { return { type: USERS_DELETE.FAILURE, id, error } }
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => {
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };


}

export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};