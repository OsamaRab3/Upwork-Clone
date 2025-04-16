import * as dotenv from 'dotenv'
dotenv.config();

export default {
    PORT:process.env.PORT ||  9001,
    MONGODB_URI:process.env.MONGODB_URI || "Your db",
    NODE_ENV:process.env.NODE_ENV
    
  
}



