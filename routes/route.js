const express = require('express');
const lists= require('../controllers/listControllers')
const router = express()

router.set('views','./views')

//routes of the app...

router.get('/',lists.listed);
router.post('/',lists.listed);
router.get('/deletelist',lists.deleteList);

module.exports = router;