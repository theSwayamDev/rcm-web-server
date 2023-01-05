import express, {Express, Request, Response} from 'express';

const mainRouter:Express = express();

mainRouter.get('/', (req:Request, resp:Response) => {
    resp.status(200).send('Able to hit APIs')
})

export default mainRouter;