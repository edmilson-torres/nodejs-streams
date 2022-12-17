import express from 'express';
import MongoConnection from './database/mongo';

import routes from './routers';

const app = express();

const database = new MongoConnection();
database.connect();

app.use(express.json());

app.use('/', routes);

export default app;
