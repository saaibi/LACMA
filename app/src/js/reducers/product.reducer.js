import { PRODUCT_GETBYID, PRODUCT_GETALL, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_DELETE } from '../constants/product.constans';

const initialState = {
  error: '',
  product: '',
  products: [],
  productSelect: [],
  isLoading: false,
};


export function product(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_GETALL.REQUEST:
    case PRODUCT_GETALL.SUCCESS:
    case PRODUCT_GETALL.FAILURE:
    case PRODUCT_GETBYID.REQUEST:
    case PRODUCT_GETBYID.FAILURE:
    case PRODUCT_CREATE.REQUEST:
    case PRODUCT_CREATE.FAILURE:
    case PRODUCT_UPDATE.REQUEST:
    case PRODUCT_UPDATE.FAILURE:
    case PRODUCT_DELETE.REQUEST:
    case PRODUCT_DELETE.FAILURE:
      return {
        ...state,
        ...payload,
      };
    case PRODUCT_GETBYID.SUCCESS: {
      const { product, isLoading } = payload;
      return {
        ...state,
        isLoading,
        product,
        productSelect: [product]
      };
    }
    case PRODUCT_CREATE.SUCCESS: {
      const { product } = payload;
      return {
        ...state,
        products: [...state.products, product]
      };
    }

    case PRODUCT_UPDATE.SUCCESS: {
      const { product, index } = payload;
      return {
        ...state,
        products: [
          ...state.products.slice(0, index),
          product,
          ...state.products.slice(index + 1),
        ],
      };
    }

    case PRODUCT_DELETE.SUCCESS: {
      const { index, isLoading } = payload;
      return {
        ...state,
        isLoading,
        product: '',
        productSelect: [],
        products: [
          ...state.products.slice(0, index),
          ...state.products.slice(index + 1),
        ],
      };
    }

    default:
      return state
  }
}