const mongoose = require('mongoose');
const Quote = require('./model/quote')

mongoose.connect('mongodb://127.0.0.1:27017/quoteAppSec-v')
  .then(() => console.log('Connected!'));

  const data = [
    {
        text: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi"
    },
    {
        text: "If you are working on something exciting, it will keep you motivated.",
        author: "Steve Jobs"
    }
];

Quote.create(data)
    .then(()=>{console.log('ok')})