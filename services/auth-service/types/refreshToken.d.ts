

import { Types } from "mongoose";
interface IRefreshToken {
    token: string;
    // user: string;
    user: Types.ObjectId;
    expiresAt: Date;
}








export default IRefreshToken;