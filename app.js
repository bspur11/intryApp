const { capitalizeWords, stockInches } = require('./utils');
const Stock = require('./Stock');
console.log(
  capitalizeWords('36-hour master course to take you from beginner to advanced')
);

const stock = stockInches(0.018, 2350);

console.log(`You'll need ${stock}ins to complete this job.`);

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
