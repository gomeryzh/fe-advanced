const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

const Cashier = function(
  name = "cashier",
  products = {},
) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0,
  this.customerMoney = 0,
  this.changeAmount = 0

  this.countTotalPrice = function(order) {
    let orderPrice = 0;
    let orderKeys = Object.keys(order);
    for (let key of orderKeys) {
      let multiply = order[key] * this.products[key];
      orderPrice += multiply;
    }
    this.totalPrice = orderPrice;
  };

  this.getCustomerMoney = function() {
    let clientInput;
    let isNumber;
    let inRange;
    let validInput;

    do {
      clientInput = prompt(
        `Стоимость Вашего заказа ${this.totalPrice}, оплатите товар:`
      );
      const clientInputAsNumber = Number(clientInput);
      isNumber = !Number.isNaN(clientInputAsNumber);
      inRange = clientInputAsNumber >= this.totalPrice;
      validInput = isNumber && inRange;
      if (clientInput === null) {
        this.customerMoney = null;
        // console.log(clientInput);
        return;
      }
      if (validInput) {
        this.customerMoney = clientInputAsNumber;
        return;
      }
      alert("недостаточно денег, пробуй еще");
    } while (!validInput);
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
  };

  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };

  this.serve = function(order) {
    this.countTotalPrice(order);
    this.getCustomerMoney();

    if (this.customerMoney === null) {
      alert("Очень жаль, что-то пошло не так, приходите еще");
      this.reset();
      return;
    }
    this.countChange();
    alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);

    this.reset();
  };
};

const vova = new Cashier("Vova", products);
// console.log(products);
// console.log(vova);
vova.serve(order);
// vova.countTotalPrice(order);
// vova.getCustomerMoney();
// console.log(this.customerMoney);


// console.log(this.totalPrice);
