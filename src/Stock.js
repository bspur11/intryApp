class Stock {
  constructor(brand, shipco, cal, type, size, pak, amount, skids) {
    this.brand = brand;
    this.shipco = shipco;
    this.cal = cal;
    this.type = type;
    this.size = size;
    this.pak = pak;
    this.amount = amount;
    this.skids = skids;
  }
  newStock() {
    console.log(
      `Arrived from ${this.shipco}: ${this.amount} sheets of ${this.brand}, ${this.cal}, ${this.size}, ${this.type}, in ${this.pak} on ${this.skids} skids.`
    );
  }
}

export default Stock;
