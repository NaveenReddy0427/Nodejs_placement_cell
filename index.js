const express = require('express');
const app = express();
const port = 3500;


// setup router middleware
app.use('/', require('./routes/index'));



app.listen(port, (req, res)=>{
    console.log(`server listening on port ${port}`);
})