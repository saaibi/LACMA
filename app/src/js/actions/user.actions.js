import { REGISTER, LOGIN, LOGOUT, USERS_GETALL, USERS_DELETE } from '../constants/user.constans';
import { userService } from '../services/user.service';
import { history } from '../store';
import { makeRequestAsync } from '../services'


const register = (userCreate) => {
    const request = (user) => { return { type: REGISTER.REQUEST, user } }
    const success = (user) => { return { type: REGISTER.SUCCESS, user } }
    const failure = (error) => { return { type: REGISTER.FAILURE, error } }

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const user = await makeRequestAsync(`/users`, "POST", userCreate);
            dispatch(success(user.data.user));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const login = (username, password) => {
    const request = (user) => { return { type: LOGIN.REQUEST, user } }
    const success = (user) => { return { type: LOGIN.SUCCESS, user } }
    const failure = (error) => { return { type: LOGIN.FAILURE, error } }

    const userAut = { username, password }

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const user = await makeRequestAsync(`/users/login`, "POST", userAut);

            dispatch(success(user.data.user));
            localStorage.setItem('user', JSON.stringify(user.data.user));
            history.push('/users');
            window.location.reload();
        } catch (error) {
            M.toast({ html: `Username or password is incorrect`, classes: 'rounded' });
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
}

const logout = () => {
    userService.logout();
    return { type: LOGOUT.SUCCESS };
}

const getAllUsers = () => {

    const request = () => ({
        type: USERS_GETALL.REQUEST,
        payload: {
            users: [],
            isLoading: true,
            error: '',
        },
    });

    const success = users => ({
        type: USERS_GETALL.SUCCESS,
        payload: {
            users,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: USERS_GETALL.FAILURE,
        payload: {
            isLoading: true,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const users = await makeRequestAsync(`/users`, "GET");
            dispatch(success(users.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
}

const login2 = (username, password) => {
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
                    window.location.reload();
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


}

const register2 = (user) => {
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
    getAllUsers,
    delete: _delete
};