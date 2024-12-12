import express from 'express';
import { redirector, shortner } from '../controller/shortFun.js';
const urlRouter = express.Router();

urlRouter.post('/shorten-url', shortner);

urlRouter.get('/short-url/:id', redirector);

export default urlRouter;