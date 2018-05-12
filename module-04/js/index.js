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

const Cashier = function ({
    name = 'cashier',
    products = {},
    totalPrice = 0,
    customerMoney = 0,
    changeamount = 0
}) {
    this.name = name;
    this.products = products;
    this.totalPrice = totalPrice;
    this.customerMoney = customerMoney;
    this.changeamount = changeamount;

    this.countTotalPrice = function (order) {
        let keyToFind;
        let multiply;
        for (let elem in order) {
          keyToFind = elem;
          for (let key in products) {
            const hasOwnKey = products.hasOwnProperty(key);
            const isMatch = key === keyToFind;
            if (hasOwnKey && isMatch) {
              let multiply = order[elem] * products[key];
              console.log(multiply);
              this.totalPrice += multiply;
            }
          }
        }
        return this.totalPrice;
    };

    this.getCustomerMoney = function () {
        let clientInput;
        let isNumber;
        let inRange;
        let validInput;
        do {
            clientInput = prompt(`Стоимость Вашего заказа ${this.totalPrice}, оплатите товар:`);
            const clientInputAsNumber = Number(clientInput);
            isNumber = Number.isNaN(clientInputAsNumber);
            inRange = clientInputAsNumber >= this.totalPrice;
            validInput = isNumber && inRange;
            if (customerMoney === null) {
                return null;
            }
            if (validInput) {
               this.customerMoney = clientInputAsNumber;
               return
            }
            alert('недостаточно денег, пробуй еще');
        } while (!validInput)
       
    };

    this.countChange = function () {
        changeamount = customerMoney - totalPrice;
    };

    this.reset = function () {
        totalPrice = 0;
        customerMoney = 0;
        changeAmount = 0;
    };
    
    this.serve = function (order) {
        this.countTotalPrice(order);
        this.getCustomerMoney();
        this.countChange();
        if (this.changeAmount > 0) {
            alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`)
        }
        alert('Очень жаль, что-то пошло не так, приходите еще');
        this.reset();

    };
};