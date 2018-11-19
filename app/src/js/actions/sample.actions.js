import findIndex from 'lodash/findIndex'
import { makeRequestAsync } from '../services'
import { SAMPLE_GETALL, SAMPLE_GETBYID, SAMPLE_CREATE, SAMPLE_UPDATE, SAMPLE_DELETE } from '../constants/sample.constans';


const getAllSample = () => {
    const request = () => ({
        type: SAMPLE_GETALL.REQUEST,
        payload: {
            samples: [],
            isLoading: true,
            error: '',
        },
    });

    const success = samples => ({
        type: SAMPLE_GETALL.SUCCESS,
        payload: {
            samples,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: SAMPLE_GETALL.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const samples = await makeRequestAsync(`/samples`, "GET");
            dispatch(success(samples.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const getSampletById = (id) => {
    const request = () => ({
        type: SAMPLE_GETBYID.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = sample => ({
        type: SAMPLE_GETBYID.SUCCESS,
        payload: {
            sample,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: SAMPLE_GETBYID.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const sample = await makeRequestAsync(`/samples/${id}`, "GET");
            dispatch(success(sample.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const createSample = (sampleCreate) => {
    const request = () => ({
        type: SAMPLE_CREATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = sample => ({
        type: SAMPLE_CREATE.SUCCESS,
        payload: {
            sample,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: SAMPLE_CREATE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const samples = await makeRequestAsync(`/samples`, "POST", sampleCreate);
            dispatch(success(samples.data.samples));
            M.toast({ html: `${samples.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const updateSample = (samples_id, sampleEdit) => {

    const request = () => ({
        type: SAMPLE_UPDATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = (index, sample) => ({
        type: SAMPLE_UPDATE.SUCCESS,
        payload: {
            sample,
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: SAMPLE_UPDATE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const { samples } = getState().sample;
            const index = findIndex(samples, { _id: samples_id });

            if (index === -1) return dispatch(failure("Sample Not found"));

            const sampleUpdate = {  };
            const sample = await makeRequestAsync(`/samples/${samples_id}`, "PUT", sampleUpdate);

            dispatch(success(index, sample.data.sample));
            M.toast({ html: `${sample.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const deleteSample = (samples_id) => {
    const request = () => ({
        type: SAMPLE_DELETE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = index => ({
        type: SAMPLE_DELETE.SUCCESS,
        payload: {
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: SAMPLE_DELETE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const { samples } = getState().sample;
            const index = findIndex(samples, { _id: samples_id });

            if (index === -1) return dispatch(failure("Sample Not found"));

            const sample = await makeRequestAsync(`/samples/${samples_id}`, "DELETE");
            dispatch(success(index));
            M.toast({ html: `${sample.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure(message));
        }
    };
};

export const sampleActions = {
    getAllSample,
    getSampletById,
    createSample,
    updateSample,
    deleteSample
}