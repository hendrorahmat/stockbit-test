import { app } from './server';
import * as database from './config/database';
import * as dontenv from 'dotenv';


dontenv.config();
database.default.sync();
const port = process.env.SERVER_PORT;
app.listen(port);