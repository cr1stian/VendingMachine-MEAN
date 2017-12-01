const express = require("express")
const router = express.Router()
const model = require("../model/schema.js")




// Get List of All Purchases
router.get("/api/vendor/purchases", (req, res) => {
  model.Machine.findOne().then( (data) =>{
    res.json(data)
  })
});


// Posting new item in the machine
router.post('/api/vendor/items', (req, res) => {

  var item = model.Item({
    img: req.body.img ,
    name: req.body.name ,
    cost: req.body.cost,
    quantity: req.body.quantity
  })
  item.save()
});







module.exports = router
