import * as dotenv from 'dotenv';
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  Router
} from 'express';
import cors from 'cors';
import { config } from './src/config';
import { logger } from './src/lib/logger';
import { AppDataSource } from './src/data-source';
import { FirebaseClient } from './src/lib/firebase';

const app: Application = express();
export const router: Router = express.Router();

//use cors only on production
const corsOption: cors.CorsOptions = {};
app.use(cors(
  (process.env.NODE_ENV === 'production') ? undefined : corsOption
));

export const LocalEnv = process.env.NODE_ENV === 'dev';
if (LocalEnv) {
  dotenv.config({ path: '.env' });
}

app.use(express.json());
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  return res.send({
    status: 'E-Bid service is up and running',
    code: 200
  });
})

process.on('unhandledRejection', (reason, promise) => {
  logger.log('Unhandled Rejection.', { reason, ex: promise });
});

try {
  // initialize database and start app
  (async() => {await AppDataSource.initialize()})();
  // initialize firebase-admin
  new FirebaseClient().initFirebaseAdmin();
  app.listen(config.port, () => {
    logger.log(`E-BID Server started on port ${config.port} `);
  });
} catch(e) {
  logger.error('server failed to start', e);
}
