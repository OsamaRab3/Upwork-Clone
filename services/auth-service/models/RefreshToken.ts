import mongoose, { Document,Model,Schema ,model  } from "mongoose";
import IRefreshToken from '../types/refreshToken.d'


interface RefreshTokenDocument extends IRefreshToken,Document {};

const refreshTokenSchema = new Schema<RefreshTokenDocument>({
    token:{
        required:true,
        type:String,
        unique:true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    expiresAt:{
        type:Date,
        required:true,
    }

},{timestamps:true  })


export default model<RefreshTokenDocument>("RefreshToken",refreshTokenSchema)