import Url from "../model/urlModel.js";
import 'dotenv/config';

export const shortner = async(req, res)=>{
    try {
        const {url} = req.body;
        console.log(url);
        const chk = await Url.findOne({longurl: url});
        if(chk) {
            return res.status(409).json({status: 'error', message: 'URL already exists'});
        }
        // const hashedUrl = crypto.createHash('sha256').update(url).digest('hex');
        const upload = new Url({longurl: url});
        const response = await upload.save();
        const shorturl = `${process.env.serverend}/api/short-url/${response.id}`;
        res.status(201).json({status: 'success', shorturl: shorturl});

    } catch (error) {
        console.error(error);
        res.status(500).json({status: 'error', message: 'Server error'});
    }
}

export const redirector = async(req, res)=>{
    const { id } = req.params;
    const url = await Url.findOne({id});
    console.log(url);
    
    if(!url){
        return res.status(404).json({status: 'error', message: 'URL not found'});
    }
    res.redirect(url.longurl);
}