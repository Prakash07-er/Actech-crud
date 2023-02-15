const catalogData = require("../Models/catalogModal");

const catalogController = {
  createCatalog: async (req, res) => {
    try {
        const { code, name, description, category, brand, price } = req.body;

        const validation = {}

        if(!code) {
          validation.code = "Enter code"
        }
        if(!name) {
          validation.name = "Enter name"
        }
        if(!category) {
          validation.category = "Enter category"
        }
        if(!brand) {
          validation.brand = "Enter brand"
        }
        if(!price) {
          validation.price = "Enter price"
        }
        const uniqueCode = await catalogData.findOne({code})
        if(uniqueCode) {
          validation.code = "Code is already exist"
        }
        const uniqueName = await catalogData.findOne({name})
        if(uniqueName) {
          validation.name = "Name is already exist"
        }

        if(Object.keys(validation).length >0)
         return res.status(500).json({ validationError: validation});
         

      const data = await catalogData({
        code,
        name,
        description,
        category,
        brand,
        price,
      });

      const allData = await data.save();
      res.status(200).json({ allData: allData });

    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" });
      console.log(error);
    }
  },
  reactCatalog: async (req, res) => {
    try {
      const data = await catalogData.find({});
      res.status(200).json({ Data: data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
  updateCatalog: async (req, res) => {
    try {
      const { code, name, description, category, brand, price } = req.body;

      const findId = await catalogData.findById({ _id: req.params.id });
      
      if (!findId)  return res.status(404).json({ msg: "Products not found" });
      
      const data = await catalogData.findOneAndUpdate(
        { _id: req.params.id },
        {
          code,
          name,
          description,
          category,
          brand,
          price,
        },
        { new: true }
      );

      const updatedData = await data.save();
      res.status(200).json({ updatedData: updatedData });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Something went wrong", error: error });
    }
  },
  singleCatalog: async (req, res) => {
    try {
      const data = await catalogData.findOne({ _id: req.params.id });

      res.status(200).json({ getSingleData: data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
  deleteCatalog: async (req, res) => {
    try {
      await catalogData.findOneAndDelete({ _id: req.params.id });

      res.status(200).json({ msg: "Requested data deleted" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Something went wrong" });
    }
  },
};

module.exports = { catalogController };
