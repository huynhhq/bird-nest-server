import {Provider, inject, ValueOrPromise} from '@loopback/context';
import {Strategy} from 'passport';
import {
  AuthenticationBindings,
  AuthenticationMetadata,
} from '@loopback/authentication';
import {BasicStrategy} from 'passport-http';
import {Profile} from '../models/request_response_model/profile.model';

export class MyAuthStrategyProvider implements Provider<Strategy | undefined> {
  constructor(
    @inject(AuthenticationBindings.METADATA)
    private metadata: AuthenticationMetadata,
  ) {}

  value(): ValueOrPromise<Strategy | undefined> {
    // The function was not decorated, so we shouldn't attempt authentication
    if (!this.metadata) {
      return undefined;
    }
    const name = this.metadata.strategy;
    if (name === 'BasicStrategy') {
      return new BasicStrategy(
        {
          passReqToCallback: true,
        },
        this.verify,
      );
    } else {
      return Promise.reject(`The strategy ${name} is not available.`);
    }
  }

  verify(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    req: any,
    username: string,
    password: string,
    cb: (err: Error | null, user?: Profile | false) => void,
  ) {
    console.log(this);
    // find user by name & password
    // call cb(null, false) when user not found
    // call cb(null, user) when user is authenticated
  }
}
