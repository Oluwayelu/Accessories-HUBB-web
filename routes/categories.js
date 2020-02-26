const router = require('express').Router()
const Category = require('../models/categories.model')
const Products = require('../models/product.model')

router.get('/', (req, res) => {
    Category.find()
        .then(cat => res.json(cat))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
    const { name } = req.body

    const newCategory = new Category({
        name
    })
    newCategory.save()
    .then(() => res.json('Category Added'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/:id', (req, res) => {
    Category.findOne({_id: req.params.id})
        .then(cat => res.json(cat))
        .sort({ createdAt: 1})
        .catch(err => res.status(400).json('Error: ' + err))
})

router.get('/products/:id', (req, res) => {
    Products.find({ category: req.params.id })
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router