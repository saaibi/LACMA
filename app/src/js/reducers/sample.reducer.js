import { SAMPLE_GETALL, SAMPLE_GETBYID, SAMPLE_CREATE, SAMPLE_UPDATE, SAMPLE_DELETE } from '../constants/sample.constans';

const initialState = {
  error: '',
  sample: '',
  samples: [],
  isLoading: false,
};


export function sample(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SAMPLE_GETALL.REQUEST:
    case SAMPLE_GETALL.SUCCESS:
    case SAMPLE_GETALL.FAILURE:
    case SAMPLE_GETBYID.REQUEST:
    case SAMPLE_GETBYID.FAILURE:
    case SAMPLE_CREATE.REQUEST:
    case SAMPLE_CREATE.FAILURE:
    case SAMPLE_UPDATE.REQUEST:
    case SAMPLE_UPDATE.FAILURE:
    case SAMPLE_DELETE.REQUEST:
    case SAMPLE_DELETE.FAILURE:
      return {
        ...state,
        ...payload,
      };
    case SAMPLE_GETBYID.SUCCESS: {
      const { sample, isLoading } = payload;
      return {
        ...state,
        isLoading,
        sample,
        sampleselect: [sample]
      };
    }
    case SAMPLE_CREATE.SUCCESS: {
      const { sample } = payload;
      return {
        ...state,
        samples: [...state.samples, sample]
      };
    }

    case SAMPLE_UPDATE.SUCCESS: {
      const { sample, index, isLoading } = payload;
      return {
        ...state,
        isLoading,
        samples: [
          ...state.samples.slice(0, index),
          sample,
          ...state.samples.slice(index + 1),
        ],
      };
    }

    case SAMPLE_DELETE.SUCCESS: {
      const { index, isLoading } = payload;
      return {
        ...state,
        isLoading,
        sample: '',
        samples: [
          ...state.samples.slice(0, index),
          ...state.samples.slice(index + 1),
        ],
      };
    }

    default:
      return state
  }
}