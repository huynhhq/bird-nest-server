export class LoginResponseModel {
  id: number;
  email: string;
  avatar?: string;
  phone?: string;
  token: string;

  constructor(
    id: number,
    email: string,
    avatar: string,
    phone: string,
    token: string,
  ) {
    this.id = id;
    this.email = email;
    this.avatar = avatar;
    this.phone = phone;
    this.token = token;
  }
}
