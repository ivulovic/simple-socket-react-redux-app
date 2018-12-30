import * as RecordTypes from "../constants/record.constants";

export const addRecord = (record) => {
  return {
    type: RecordTypes.ADD_RECORD,
    payload: record
  }
};

export const recordReceived = (record) => {
  return {
    type: RecordTypes.RECORD_RECEIVED,
    payload: record
  }
};

export const loadRecords = (records) =>{
  return {
    type: RecordTypes.LOAD_RECORDS,
    payload: records
  }
};

export const defineRecord = (recordData) => {
  return {
    type: RecordTypes.DEFINE_RECORD,
    payload: recordData
  }
};