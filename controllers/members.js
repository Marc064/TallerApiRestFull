const Member = require('../models/model-member')

module.exports={
    findAll:async(req, res)=>{
        try{
            const data = await Member.find({})
            return res.status(200).json({"state":true, "data":data})
        }catch(error){
            return res.status(500).json({"state":false,"error":error})
        }
    },

    findByObjectId:async(req, res)=>{

    },

    findById:async(req, res)=>{

    },

    save:async(req, res)=>{

    },

    update:async(req, res)=>{

    },

    remove:async(req, res)=>{
        
    }
}