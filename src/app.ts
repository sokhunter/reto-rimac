import express from 'express';
import routes from './routes';
import serverless from 'serverless-http';
import './config/db.config';

const app = express();

app.use(express.json());

app.use('/', routes);

app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(404).send({ 
        msg: 'Not found',
        code: 404,
        request: `${req.method} ${req.url}`
    });
});

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(err);
    res.status(err.status).send();
});

export const handler = serverless(app);