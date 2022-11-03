const express = require('express');
const router = express.Router();
const crypto = require('crypto');

// Using path parameter hello/:person
router.get('/:person/:greeting', (req,res,next) => {
    const name = req.params.person;
    const greeting = req.params.greeting;
    res.render('hello', { name, greeting });
});

router.post('/hash', (req,res, next) => {
    const plainText = req.body.plainText;
    const hash = crypto.createHash('md5').update(plainText).digest('hex');
    res.json({
        plainText,
        hash
    });

});

// We could as well send back a json data
router.get('/:time', (req, res, next)=> {
    res.json({
        time:new Date().toISOString()
    });
})

module.exports = router;