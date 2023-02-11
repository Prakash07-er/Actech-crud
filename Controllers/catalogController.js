const catalogData = require('../Models/catalogModal')
// const mongoose = require('mongoose')

const catalogController = {
    createCatalog: async(req,res)  => {
        try {  
            const {code, name, description, category, brand, price} = req.body

            const formErrors = []

            if(!code && !name) return res.status(400).json({msg: "Please make sure to add code and name fields"})

            // if(!code ) return res.status(400).json({msg: "Please fill code fields"})
            // if(!name) return res.status(400).json({msg: "Please fill name fields"})

            // const code_name = await catalogData.find({code, name})
            // if(code_name ) return res.status(400).json({msg: "Code and name is already exist"})
            
            // const uniqueCode = await catalogData.findOne({code})
            // if(uniqueCode) return res.status(400).json({msg: "Code is already exist"})

            // const uniqueName = await catalogData.findOne({name})
            // if(uniqueName) return res.status(400).json({msg: "Name is already exist"})

            const data = await catalogData({
                code, name, description, category, brand, price
            })

            const allData = await data.save();
            res.status(200).json({allData: allData})
           
        } catch (error) {
            console.log(error)

            res.status(500).json({msg: "Something went wrong"})
        }
    },
    reactCatalog: async(req,res)  => {
        try {  
            const data = await catalogData.find({})
            res.status(200).json({Data: data})
           
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: "Something went wrong"})
        }
    },
    updateCatalog: async(req,res)  => {
        try {  
            const {description, category, brand, price} = req.body

            const data = await catalogData.findOneAndUpdate({_id:req.params.id},
                {
                    description, category, brand, price
                 }, {new:true})

            const updatedData = await data.save();
            res.status(200).json({updatedData: updatedData})
           
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: "Something went wrong"})
        }
    },
    deleteCatalog: async(req,res)  => {
        try {  
            await catalogData.findOneAndDelete({_id:req.params.id})

            res.status(200).json({msg: "Requested data deleted"})
           
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: "Something went wrong"})
        }
    },
}


module.exports  = {catalogController}