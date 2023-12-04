const express = require('express');
const app = express();
const port = 3500;

// setup the static file to use app
app.use(express.static('./assets'))

// setup the layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);


// setup router middleware
app.use('/', require('./routes/index'));

// to set view engine
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, (req, res)=>{
    console.log(`server listening on port ${port}`);
})