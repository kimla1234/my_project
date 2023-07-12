
const  pd = require('../controller/product.controller')
const product = (app) =>{
   app.get('/product',pd.getlist)
}

module.exports = product;