import Stock from './Stock.js';
import './css/style.css';

const recieved = new Stock(
  'tango',
  'Ariva',
  0.018,
  'glossc2s',
  '23/35',
  'loose',
  23000,
  8
);

recieved.newStock();

// const axios = require('axios');

async function getPost() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log(res.data);
}
getPost();
