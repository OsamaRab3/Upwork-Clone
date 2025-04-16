
// ____________________________________________________________________________________________________________
// ______________________________________Osama Rabea Dakrory__________________________________________________
// ____________________________________________________________________________________________________________

import app from "./app";
import * as http from 'http'
import environment from "./config/environment";



const server = http.createServer(app);

const PORT = environment.PORT;
// console.log("PORT: ",PORT)


server.listen(PORT,()=>{
    console.log("server run on: ",PORT);
})

