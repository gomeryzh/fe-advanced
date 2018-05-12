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
    products = {
        bread: 10,
        milk: 15,
        apples: 20,
        chicken: 50,
        pork: 80,
        cheese: 60,
        tea: 20,
        candy: 25
    },
    totalPrice = 0,
    customerMoney = 0,
    changeAmount = 0
}) {
    this.name = name;
    this.products = products;
    this.totalPrice = totalPrice;
    this.customerMoney = customerMoney;
    this.changeAmount = changeAmount;

    this.countTotalPrice = function (order) {
        let keyToFind;
        let multiply;
        let orderPrice = 0;
        for (let elem in order) {
            keyToFind = elem;
            for (let key in this.products) {
                const hasOwnKey = this.products.hasOwnProperty(key);
                const isMatch = key === keyToFind;
                if (hasOwnKey && isMatch) {
                    let multiply = order[elem] * this.products[key];
                    console.log(multiply);
                    orderPrice += multiply;
                }
            }
        }
        this.totalPrice = orderPrice;
    };

    this.getCustomerMoney = function () {
        let clientInput;
        let isNumber;
        let inRange;
        let validInput;

        do {
            clientInput = prompt(`Стоимость Вашего заказа ${this.totalPrice}, оплатите товар:`);
            const clientInputAsNumber = Number(clientInput);
            isNumber = !Number.isNaN(clientInputAsNumber);
            inRange = clientInputAsNumber >= this.totalPrice;
            validInput = isNumber && inRange;
            if (clientInput === null) {
                this.customerMoney = null;
                return;
            }
            if (validInput) {
                this.customerMoney = clientInputAsNumber;
                return
            }
            alert('недостаточно денег, пробуй еще');
        } while (!validInput);
    };

    this.countChange = function () {
        this.changeAmount = this.customerMoney - this.totalPrice;
        return this.changeAmount;
    };

    this.reset = function () {
        this.totalPrice = 0;
        this.customerMoney = 0;
        this.changeAmount = 0;
    };

    this.serve = function (order) {
        this.countTotalPrice(order);
        this.getCustomerMoney();
        this.countChange();
        // if (this.customerMoney !== null && this.customerMoney > this.totalPrice) {
        //     this.countChange();
        //     alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
        // }
        // alert('Очень жаль, что-то пошло не так, приходите еще');
        this.reset();

    };
};



const vova = new Cashier('Vova', products, 0, 0, 0);
console.log(vova);

// vova.countTotalPrice(order);
// console.log(vova);

// vova.getCustomerMoney();
// console.log(vova);

vova.serve(order);
console.log(vova);