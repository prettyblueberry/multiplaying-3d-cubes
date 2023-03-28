import express from 'express'
import path from 'path';

const router = express.Router()

router.get('/', function(req, res) {
    // console.log(path.resolve('./'));
    res.sendFile((path.resolve('./views/index.html')));
});

export default router
