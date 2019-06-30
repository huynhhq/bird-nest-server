import {LoginModel} from '../models/request_response_model/login.model';
import {LoginResponseModel} from '../models/request_response_model';

export interface UserRepositoryInterface {
  login(entity: LoginModel): Promise<LoginResponseModel>;
}
