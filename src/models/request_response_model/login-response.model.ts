import {LoggedInUserInfoModel, ErrorModel} from '.';

export class LoginResponseModel {
  data: LoggedInUserInfoModel;
  error: ErrorModel;
}
