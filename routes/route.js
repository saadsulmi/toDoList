const express = require('express');
const router = express()

//routes of the app...

router.get('/',(req,res)=>{
    res.send("hpi")
})

module.exports = router;