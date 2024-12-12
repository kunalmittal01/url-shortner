import mongoose from "mongoose";
import { nanoid } from "nanoid";
const urlSchema = new mongoose.Schema({
    longurl: {
        type: String,
        required: true
    },
    id: {
        type: String,
        default: () => {
            return nanoid(10);
        }
    }

}, { timestamps: true });

const Url = mongoose.model("longurl", urlSchema ,"longurl");

export default Url;