import { defineAction } from '../utils/defineAction';
import { REQUEST, SUCCESS, FAILURE } from './commonStates';

const accionsHttp = [REQUEST, SUCCESS, FAILURE];

export const SAMPLE_GETALL = defineAction('SAMPLE_GETALL', accionsHttp);
export const SAMPLE_GETBYID = defineAction('SAMPLE_GET', accionsHttp);
export const SAMPLE_CREATE = defineAction('SAMPLE_CREATE', accionsHttp);
export const SAMPLE_UPDATE = defineAction('SAMPLE_UPDATE', accionsHttp);
export const SAMPLE_DELETE = defineAction('SAMPLE_DELETE', accionsHttp);
