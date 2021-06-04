// import { Products, HouseWare, Clothes, Foods } from "./product.js";

class inventory {
  stock = [];
  numOfSold = [];
  numHouseware = [];
  numClothes = [];
  numFoods = [];

  add(type, item) {
    if (type == "houseware") {
      newItem = new HouseWare(
        item.id,
        item.name,
        item.price,
        item.nsx,
        item.date,
        item.durable
      );
      console.log(this.stock.push(item));
    }

    if (type == "clothes") {
      newItem = new Clothes(
        item.id,
        item.name,
        item.price,
        item.nsx,
        item.date,
        item.original
      );
      this.stock.push(item);
    }

    if (type == "food") {
      newItem = new Foods(
        item.id,
        item.name,
        item.price,
        item.nsx,
        item.date,
        item.taste
      );
      this.stock.push(item);
    }
  }

  sold(type, id) {
    for (let i = 0; i <= this.stock.length; i++) {
      if (id == stock[i].id && type == "houseware") {
        this.stock.splice(i, 1);
        this.numHouseware.push(this.stock[i]);
      }

      if (id == stock[i].id && type == "clothes") {
        this.stock.splice(i, 1);
        this.numClothes.push(this.stock[i]);
      }

      if (id == stock[i].id && type == "food") {
        this.stock.splice(i, 1);
        this.numFoods.push(this.stock[i]);
      }
    }
  }

  revenue() {
     let sum = 0;
     sum = sum + this.numHouseware.price * (1-0.1) + this.numClothes.price * (1-0.05) + this.numFoods.price * (1-0.02)
     console.log(sum);
  }
}

let suit = new Clothes (1, 'short suit', 125000, 'vietnam', '22/5/2019','vietnam')
let jacket = new Clothes(2, 'jacket', 150000, 'vietnam','20/5/2018','vietnam')
let table = new HouseWare(3, 'table', 50000, 'china', 14/4/2019, 4)
let sofa = new HouseWare(4, 'sofa', 500000, 'china', '31/5/2018', 3)
let cherry = new Foods (5, 'cherry', 54000, 'russia', 12/12/2012, 'sweet')
let apple = new Foods(6, 'apple', 45000, 'china', '12/12/2020','sweet')

inventory.add (houseware, {id: 7, name: 'television', price: 1350000, nsx: 'usa', date: '5/5/1999', orginal: 'usa'})