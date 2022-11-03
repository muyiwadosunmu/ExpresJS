const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.render('hello', { name : 'James'});
});

module.exports = router;