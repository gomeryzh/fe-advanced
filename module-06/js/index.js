"use strict";

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }
  static SIZE_SMALL = "SIZE_SMALL";
  static SIZE_LARGE = "SIZE_LARGE";

  static SIZES = {
    [this.SIZE_SMALL]: {
      price: 30,
      calories: 50
    },
    [this.SIZE_LARGE]: {
      price: 50,
      calories: 100
    }
  };

  static STUFFING_CHEESE = "STUFFING_CHEESE";
  static STUFFING_SALAD = "STUFFING_SALAD";
  static STUFFING_MEAT = "STUFFING_MEAT";

  static STUFFINGS = {
    [this.STUFFING_CHEESE]: {
      price: 15,
      calories: 20
    },
    [this.STUFFING_SALAD]: {
      price: 20,
      calories: 5
    },
    [this.STUFFING_MEAT]: {
      price: 35,
      calories: 15
    }
  };

  static TOPPING_SPICE = "TOPPING_SPICE";
  static TOPPING_SAUCE = "TOPPING_SAUCE";

  static TOPPINGS = {
    [this.TOPPING_SPICE]: {
      price: 10,
      calories: 0
    },
    [this.TOPPING_SAUCE]: {
      price: 15,
      calories: 5
    }
  };

  addTopping = topping => {};

  removeTopping = topping => {};

  getToppings = () => {
    return this.TOPPINGS;
  };

  getSize = () => {
    return this.size;
  };

  getStuffing = () => {
    return this.stuffing;
  };

  calculatePrice = () => {};

  calculateCalories = () => {};
}
