function capitalizeWords(sentence) {
  return sentence
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

function stockInches(caliper, net) {
  return caliper * net;
}

module.exports = { capitalizeWords, stockInches };
