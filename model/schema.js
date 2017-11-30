const mongoose = require('mongoose')
// Item schema
const itemSchema = new mongoose.Schema({
  img: {type: String},
  name: {type: String, required: true},
  cost: {type: Number, required: true},
  quantity: {type: Number, required: true},
  createdAt: {type: Date, required: true, default: Date.now}
})
// Machine schema
const machineSchema = new mongoose.Schema({
  totalMoney: {type: Number, required: true},
  log: []
})

module.exports = {
  Item: mongoose.model('Item', itemSchema),
  Machine: mongoose.model('Machine', machineSchema)
}
