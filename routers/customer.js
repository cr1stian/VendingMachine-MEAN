const express = require("express")
const router = express.Router()
const model = require("../model/schema.js")



// Get a list of items
router.get('/api/customer/items', (req, res) => {
  model.Item.find().then((data) => {
    res.json(data)
  })
})


// Post Purchase of item
router.post('/api/customer/items/:id/purchases', (req, res) => {
  model.Item.findOne({
    _id: req.params.id
  }).then((data) => {
                      // Updating Quantity
    data.quantity -= 1
    data.save()
                      // Saving Purchase to Log
    model.Machine.findOne().then((machine) =>{
      machine.totalMoney += data.cost;
      machine.itemsSold.push({
        name: data.name,
        cost: data.cost,
        time: Date.now()
      })
      machine.save()
    })
  })
});






module.exports = router
