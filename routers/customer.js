const express = require("express")
const router = express.Router()
const model = require("../model/schema.js")



// Get a list of items
router.get('/api/customer/items', (req, res) => {
  model.Item.find().then((data) => {
    res.json(data)
  })
})



router.post('/api/customer/items/:id/purchases', (req, res) => {

    givenMoney: 100   // NEEDS TO BE FIXED !
    var chag
// Grabbing Selected
  model.Item.findOne({
    _id: req.params.id
  }).then((data) => {

      data.cost

  })


})









module.exports = router
