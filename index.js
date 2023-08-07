const Express = require('express')
const app = Express();
const port = process.env.PORT || 4000
app.listen(port,()=>{
    console.log( `Listening at ${port}`);
})