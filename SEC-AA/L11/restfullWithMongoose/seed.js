const mongoose = require('mongoose');
const Product = require('./model/product')

mongoose.connect('mongodb://127.0.0.1:27017/SEC-AA-Restfull')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log('DB not conected')})

let dummyData = [
    {
        name: 'Laptop',
        price: 200,
        image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: 'Laptops are designed to be portable computers. They are smaller and lighter than desktops'
    },
    {
        name: 'keyboard',
        price: 40,
        image: 'https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: 'A keyboard is a device that allows you to input letters, numbers, and symbols into a computer or other device.'
    },
    {
        name: 'Book',
        price: 20,
        image: 'https://plus.unsplash.com/premium_photo-1664006988924-16f386bcd40e?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: "A book description is a short summary of a book's content that's intended to entice readers to buy it",
    }
]

Product.create(dummyData)
    .then(()=>{console.log('Product created !')})