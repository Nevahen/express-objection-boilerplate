import { AuthController } from 'controllers';
import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post('/', passport.authenticate('local'), AuthController.authenticate);
router.get('/checkLogin', AuthController.checkLogin);

router.get('/logout', AuthController.logout);

export { router as AuthRoute };
