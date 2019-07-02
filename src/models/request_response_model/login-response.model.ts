export class LoginResponseModel {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  token: string;

  constructor(id: number, email: string, avatar: string, token: string) {
    this.id = id;
    this.email = email;
    this.avatar = avatar;
    this.token = token;
  }
}
