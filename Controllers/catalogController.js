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
        res.status(500).json({ msg: "Something went wrong" , validationError: validation});

        console.log("validation", validation)

        // if (!code || !name || !category || !brand || !price)

        // var isValid = {
    
        // };
        
        // const uniqueCode = await catalogData.findOne({code})
        // if(uniqueCode) return res.status(400).json({code: "Code is already exist"})
        
        // const uniqueName = await catalogData.findOne({name})
        // if(uniqueName) return res.status(400).json({name: "Name is already exist"})
        

        // const code_name = await catalogData.find({code, name})
        // if(code_name ) return res.status(400).json({msg: "Code and name is already exist"})
    
     

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
      console.log(error);
      res.status(500).json({ msg: "Something went wrong" });
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

      // const findId = await catalogData.findById({ _id: req.params.id });
      // console.log("findId", findId._id);

      // const { id } = req.params;
      // console.log("id:", id);
      // const result = mongoose.Types.ObjectId(id.toString().trim());
      // console.log("res:", result);


      //  var test = await catalogData.exists({ _id:findId._id });
      //  if (!test)  return res.status(404).json({ msg: "Products not found" });
      
      // console.log("test", test);

      // const { id } = req.params;
      // console.log("id:", id);
      // const findId = await catalogData.findById({id});
      // if (!mongoose.Types.ObjectId.isValid(findId))
      //     return res.status(404).json({ msg: "Products not found"});

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
