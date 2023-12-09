const Band = require('../models/model-band')

module.exports={
    findAll:async(req, res)=>{
        try{
            const data = await Band.find({})
            return res.status(200).json({"state":true, "data": data})
        }catch(error){
            return res.status(500).json({"state":false,"error":error})
        }
    },

    findByObjectId:async(req, res)=>{
        const {id}=req.params
        try{
            const data = await Member.findById(id)
            return res.status(200).json({"state":true, "data":data})
        }catch(error){
            return res.status(500).json({"state":false,"error":error})
        }
    },

    findById:async(req, res)=>{
        const {id} = req.params
        try{
            const data = await Member.find({id:id})
            return res.status(200).json({"state":true, "data":data})
        }catch(error){
            return res.status(500).json({"state":false,"error":error})
        }
    },

    save:async(req, res)=>{

    },

    update:async(req, res)=>{

    },

    remove:async(req, res)=>{

    }
}