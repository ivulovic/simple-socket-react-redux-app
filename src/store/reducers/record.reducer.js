import * as ActionTypes from "../constants/record.constants";
import {mapToEntity} from "../../utils/entity.utils";

const recordsReducer = (state = {
  records: {},
  loading: false
}, action) => {
  switch (action.type){
    case ActionTypes.LOAD_RECORDS:
       return {
        ...state,
        records: action.payload || {},
      };
    case ActionTypes.DEFINE_RECORD:
      return {
        ...state,
        records: {
          ...state.records,
          ...mapToEntity(action.payload, 'chanId')
        }
      };
    case ActionTypes.ADD_RECORD:
    case ActionTypes.RECORD_RECEIVED:
      let currentRecord = state.records[action.payload.id];
      return state = {
        ...state,
        records: {
          ...state.records,
          [action.payload.id]:{
            ...currentRecord,
            values: action.payload.value
          }
        }
      };

    default: return state;
  }
};

export default recordsReducer;