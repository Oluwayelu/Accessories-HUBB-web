const router = require('express').Router()
const Products = require('../models/product.model')

router.get('/', (req, res) => {
    Products.find()
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
    const {
        name,
        description,
        price,
        category,
        totalQuantity,
        images
    } = req.body

    const newProduct = new Products({
        name,
        description,
        price,
        category,
        totalQuantity,
        images
    })

    newProduct.save()
        .then(() => res.json("Product Added"))
        .catch(err => res.status(400).json({msg: 'Something happened, Product was not added'}))
})

router.get('/:id', (req, res) => {
    Products.find({ _id: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router