import { User } from 'models';
import passport from 'passport';
import passportLocal from 'passport-local';

const LocalStrategy = passportLocal.Strategy;

/* tslint:disable */

export const PPSerializeUser = () => {
  passport.serializeUser(function(user: User, done: any) {
    done(null, user);
  });
}

export const PPDeserializeUser = () => {
  passport.deserializeUser(function(user: User, done: any) {
    done(null, user);
  });
}


export const localStrategy = new LocalStrategy(async (username, password, done) => {

  const user = await User.query().findOne({ username });

  if(!user) {
    return done(null, false, { message: 'Authentication failed.' });
  }

  const validPassword = await user.validatePassword(password);

  if(!validPassword) {
    return done(null, false, { message: 'Authentication failed.' });
  }

  return done(null, user);
});