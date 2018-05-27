// "use strict";

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  static SIZE_SMALL = "SIZE_SMALL";
  static SIZE_LARGE = "SIZE_LARGE";

static SIZES = {
    [Hamburger.SIZE_SMALL]: {
      price: 30,
      calories: 50
    },
    [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 100
    }
  };

static STUFFING_CHEESE = "STUFFING_CHEESE";
  static STUFFING_SALAD = "STUFFING_SALAD";
  static STUFFING_MEAT = "STUFFING_MEAT";

  static STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
      price: 15,
      calories: 20
    },
    [Hamburger.STUFFING_SALAD]: {
      price: 20,
      calories: 5
    },
    [Hamburger.STUFFING_MEAT]: {
      price: 35,
      calories: 15
    }
  };

  static TOPPING_SPICE = "TOPPING_SPICE";
  static TOPPING_SAUCE = "TOPPING_SAUCE";

  static TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
      price: 10,
      calories: 0
    },
    [Hamburger.TOPPING_SAUCE]: {
      price: 15,
      calories: 5
    }
  };

  addTopping (topping) {
    this.toppings.push(topping)
  };

  removeTopping (topping) {
    this.toppings.filter(value => value !== topping)
  };

  getToppings () {
    return this.toppings;
  };

  getSize () {
    return this.size;
  };

  getStuffing () {
    return this.stuffing;
  };

  calculatePrice () {
    const sizePrice = Hamburger.SIZES[this.size].price;
    const stuffingPrice = Hamburger.STUFFINGS[this.stuffing].price;
    const toppingPrice = Hamburger.TOPPINGS[this.topping].price;
    const totalPrice = sizePrice + stuffingPrice + toppingPrice;
    return totalPrice;
  };

  calculateCalories () {
    const sizeCalories = Hamburger.SIZES[this.size].calories;
    const stuffingCalories = Hamburger.STUFFINGS[this.stuffing].calories;
    const toppingCalories = Hamburger.TOPPINGS[this.topping].calories;
    const totalCalories = sizeCalories + stuffingCalories + toppingCalories;
    return totalCalories;
  };
}

const hamburger = new Hamburger({ 
  size: Hamburger.SIZE_SMALL, 
  stuffing: Hamburger.STUFFING_CHEESE
});
console.log(hamburger);

// hamburger.addTopping(Hamburger.TOPPING_SPICE);
// console.log(hamburger);

// console.log("Price: ", hamburger.calculatePrice());

// console.log("Calories: ", hamburger.calculateCalories());

// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// console.log(hamburger);

// console.log("Price with sauce: ", hamburger.calculatePrice());

// console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1