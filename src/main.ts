import express, { Application } from 'express';
import cors from 'cors';
import { Handlers } from './handlers';

const app: Application = express();
const port = process.env.PORT || 5100;
const isVercelRuntime = process.env.VERCEL === '1' || process.env.VERCEL === 'true';

app.use(express.urlencoded({ extended: false }));
app.use(cors());

const handlers = new Handlers();

app.get('/', handlers.getRoot);
//Get Graph
app.get('/graph', handlers.getGraph);

app.get('/data', handlers.getData);

export default app;

if (!isVercelRuntime) {
    app.listen(port, (): void => {
        console.log(`Server is Running on Port ${port}`);
    });
}
