import { defineAction } from '../utils/defineAction';
import { REQUEST, SUCCESS, FAILURE } from './commonStates';

const accionsHttp = [REQUEST, SUCCESS, FAILURE];

export const PRODUCT_GETALL = defineAction('PRODUCT_GETALL', accionsHttp);
export const PRODUCT_GETBYID = defineAction('PRODUCT_GET', accionsHttp);
export const PRODUCT_CREATE = defineAction('PRODUCT_CREATE', accionsHttp);
export const PRODUCT_UPDATE = defineAction('PRODUCT_UPDATE', accionsHttp);
export const PRODUCT_DELETE = defineAction('PRODUCT_DELETE', accionsHttp);
