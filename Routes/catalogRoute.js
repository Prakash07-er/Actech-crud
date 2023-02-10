const router = require('express').Router();
const {catalogController} = require("../Controllers/catalogController")

router.post('/create-catalog', catalogController.createCatalog)

router.get('/read-catalog', catalogController.reactCatalog)

router.put('/update-catalog/:id', catalogController.updateCatalog)

router.delete('/delete-catalog/:id', catalogController.deleteCatalog)


module.exports = router