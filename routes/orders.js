const router = require('express').Router()
const Orders = require('../models/order.model')

router.get('/', (req, res) => {
    Orders.find()
        .then(order => res.json(order))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.post('/', (req, res) => {
    const {
        name,
        phone,
        location,
        product,
        quantity
    } = req.body

    console.log("wertyv")

    const newOrder = new Orders({
        name,
        phone,
        location,
        product,
        quantity
    })
    console.log(newOrder)

    newOrder.save()
        .then(() => res.json('Order Added'))
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router