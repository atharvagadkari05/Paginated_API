const Express = require('express')
const app = Express();
const port = process.env.PORT || 4000
const paginatedrouter = require('./routes/problems')
app.use('/', paginatedrouter)
app.listen(port,()=>{
    console.log( `Listening at ${port}`);
})