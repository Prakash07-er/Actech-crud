const { trusted } = require('mongoose')
const catalogData = require('../Models/catalogModal')
// const mongoose = require('mongoose')

const catalogController = {
    createCatalog: async(req,res)  => {
        try {  
            const {code, name, description, category, brand, price} = req.body

            const uniqueCode = await catalogData.findOne({code})
            if(uniqueCode) return res.status(400).json({msg: "Code is already exist"})

            const uniqueName = await catalogData.findOne({name})
            if(uniqueName) return res.status(400).json({msg: "Name is already exist"})

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
            const data = await catalogData.findOneAndDelete({_id:req.params.id})

            res.status(200).json({msg: "Requested data deleted"})
           
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: "Something went wrong"})
        }
    },
}


module.exports  = {catalogController}