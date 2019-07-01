import {ErrorModel} from '../models/request_response_model';
const createError = (
  errorMsg: string,
  errorName: string,
  statusCode: number,
) => {
  const error = new ErrorModel();
  error.name = errorName || 'Unknown Error';
  error.message = errorMsg;
  error.statusCode = statusCode;
  return error;
};

export {createError};
