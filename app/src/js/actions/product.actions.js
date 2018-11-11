import findIndex from 'lodash/findIndex'
import { makeRequestAsync } from '../services'
import { PRODUCT_GETBYID, PRODUCT_GETALL, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_DELETE } from '../constants/product.constans';


const getAllProduct = () => {
    const request = () => ({
        type: PRODUCT_GETALL.REQUEST,
        payload: {
            clients: [],
            isLoading: true,
            error: '',
        },
    });

    const success = products => ({
        type: PRODUCT_GETALL.SUCCESS,
        payload: {
            products,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: PRODUCT_GETALL.FAILURE,
        payload: {
            isLoading: true,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const products = await makeRequestAsync(`/products`, "GET");
            dispatch(success(products.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const getById = (id) => {
    const request = () => ({
        type: PRODUCT_GETBYID.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = product => ({
        type: PRODUCT_GETBYID.SUCCESS,
        payload: {
            product,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: PRODUCT_GETBYID.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const product = await makeRequestAsync(`/products/${id}`, "GET");
            dispatch(success(product.data));
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const createProduct = (productCreate) => {
    const request = () => ({
        type: PRODUCT_CREATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = product => ({
        type: PRODUCT_CREATE.SUCCESS,
        payload: {
            product,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: PRODUCT_CREATE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const product = await makeRequestAsync(`/products`, "POST", productCreate);
            dispatch(success(product.data.product));
            M.toast({ html: `${product.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const updateProduct = (product_id, productEdit) => {

    const request = () => ({
        type: PRODUCT_UPDATE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = (index, product) => ({
        type: PRODUCT_UPDATE.SUCCESS,
        payload: {
            product,
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: PRODUCT_UPDATE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const { products } = getState().product;
            const index = findIndex(products, { _id: product_id });

            if (index === -1) return dispatch(failure("Product Not found"));

            const productUpdate = { company: productEdit.company, contact: productEdit.contact };
            const product = await makeRequestAsync(`/products/${product_id}`, "PUT", productUpdate);

            dispatch(success(index, product.data.product));
            M.toast({ html: `${product.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure({ error: message }));
        }
    };
};

const deleteProduct = (product_id) => {
    const request = () => ({
        type: PRODUCT_DELETE.REQUEST,
        payload: {
            isLoading: true,
            error: '',
        },
    });

    const success = index => ({
        type: PRODUCT_DELETE.SUCCESS,
        payload: {
            index,
            isLoading: false,
            error: '',
        },
    });

    const failure = error => ({
        type: PRODUCT_DELETE.FAILURE,
        payload: {
            isLoading: false,
            error,
        },
    });

    return async (dispatch, getState) => {
        dispatch(request());
        try {
            const { products } = getState().product;
            const index = findIndex(products, { _id: product_id });

            if (index === -1) return dispatch(failure("Product Not found"));

            const product = await makeRequestAsync(`/products/${product_id}`, "DELETE");
            dispatch(success(index));
            M.toast({ html: `${product.data.status}`, classes: 'rounded' });
        } catch (error) {
            const message = error.message || error;
            dispatch(failure(message));
        }
    };
};

export const productActions = {
    getAllProduct,
    getById,
    createProduct,
    updateProduct,
    deleteProduct
}