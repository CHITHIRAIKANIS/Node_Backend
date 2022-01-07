const mongoose1 = require("mongoose");
const Schema1 = mongoose.Schema;


const productScheme = new Schema({
     productName: {
        type: String,
        minLength: 5,
        maxLength: 25,
        required: true ,
        enum: ['Laptop', 'Television', 'Mobile']
     },
     quantity: { 
         type: Number,
         required: true
     },
     price: {
         type: Number,
         required: true
     },
     description: {
        type: String,
        minLength: 5,
        maxLength: 250,
        required: false
     },
     userQuantity: {
         type: Number,
         required: true
     }
})

//mongoose1.model('Name of the model', 'Schema for which model has to be created', 'Collection in db where it has to update its entries')
const Product = mongoose1.model('Product',productScheme,'product')
module.exports = Product;