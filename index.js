const express = require('express');
const app = express()
const port = 8000
const mainRoutes = require('./routes/route');

app.use('/',mainRoutes);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
app.listen(port,()=>{
    console.log(`The app is listening on http://localhost:${port}`);
})