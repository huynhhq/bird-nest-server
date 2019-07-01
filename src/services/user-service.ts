import {User} from '../models';
import {UserService, UserProfile} from '@loopback/authentication';
import {LoginModel} from '../models/request_response_model';
import {repository} from '@loopback/repository';
import {UserRepository} from '../repositories';
import {inject} from '@loopback/context';
import {PasswordHasherBindings} from '../keys';
import {PasswordHasher} from './hash.password.bcryptjs';
import {HttpErrors} from '@loopback/rest';

export class MyUserService implements UserService<User, LoginModel> {
  constructor(
    @repository(UserRepository) public userRepository: UserRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
  ) {}

  async verifyCredentials(credentials: LoginModel): Promise<User> {
    const foundUser = await this.userRepository.findOne({
      where: {email: credentials.email},
    });

    if (!foundUser) {
      throw new HttpErrors.NotFound(
        `User with email ${credentials.email} not found.`,
      );
    }
    const passwordMatched = await this.passwordHasher.comparePassword(
      credentials.password,
      foundUser.password,
    );

    if (!passwordMatched) {
      throw new HttpErrors.Unauthorized('The credentials are not correct.');
    }

    return foundUser;
  }

  convertToUserProfile(user: User): UserProfile {
    throw new Error('Method not implemented.');
  }
}
