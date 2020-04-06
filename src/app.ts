import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import { localStrategy, PPDeserializeUser, PPSerializeUser } from 'middlewares/passport';
import passport from 'passport';
import { AuthRoute } from 'routes';

const app = express();

app.set('port', process.env.PORT || 3000);

// Global middlewares
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
 }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

passport.use(localStrategy);
PPDeserializeUser();
PPSerializeUser();

// Root routes
app.use('/auth', AuthRoute);

export default app;
