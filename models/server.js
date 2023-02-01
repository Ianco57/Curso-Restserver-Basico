const express = require('express');
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( express.static('public'));
    }

    routes(){
        
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en puerto',this.port);
        });
    }


}
//const express = require('express')
//const app = express()

//app.get('/',(req, res)=>{
//  res.send('Hello World')
//})

//app.listen(process.env.PORT, ()=>{
//    console.log('Servidor corriendo en puerto',process.env.PORT)
//})

module.exports = Server;