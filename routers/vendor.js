const express = require("express")
const router = express.Router()
const model = require("../model/schema.js")




















// Posting new item in the machine
router.get('/api/vendor/items', (req, res) => {

  var item = model.Item({
    img: req.body.img ,
    name: req.body.name ,
    cost: req.body.cost,
    quantity: req.body.quantity
  })
  item.save()

})











module.exports = router
