import express from 'express'
import path from 'path'
import cors from 'cors'
import Router from "express";

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

const router = Router();

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

app.use('/', express.static(path.resolve(CURRENT_WORKING_DIR, 'public')))

// mount routes
router.get('/', function(req, res) {
    // console.log(path.resolve('./'));
    res.sendFile((path.resolve('./public/index.html')));
  });

export default app
