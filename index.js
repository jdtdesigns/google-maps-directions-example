const axios = require('axios');

axios.get('https://booksrun.com/api/price/sell/1464108730?key=durnemjx4rdbc0m7r6ma')
  .then(data => console.log(data));