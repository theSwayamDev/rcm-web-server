import express, {Express} from 'express';
import CORS from 'cors';
import * as bodyParser from 'body-parser';
import dotenv from 'dotenv'
import pgServer from './db/dbconfig';
import mainRouter from './routes/mainRouter';

//Initialize few Objects
dotenv.config()
const app:Express = express();
app.use(CORS());
app.use(bodyParser.json());
app.use('/api', mainRouter);

//Authenticate DB Connection and Start Express Server
pgServer.authenticate().then(() => {
    const port = process.env.PORT || 4000
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
}).catch((error) => {
    app.listen(5000, () => {
        console.log(`Unable to Connect To DB, ERROR: ${error.message}`)
        console.log(`Server Running In Fallback Mode at http://localhost:5000`);
    })
})
