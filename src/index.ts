if (process.env.NODE_ENV === 'production') {
  require('module-alias/register');
}

const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile')[environment];

import { Model } from 'objection';
import app from './app';

const database = require('knex')(configuration);

Model.knex(database);

app.listen(app.get('port'), () => {
  console.log('App started in %s mode @ port %d', app.get('env'), app.get('port'));
});
