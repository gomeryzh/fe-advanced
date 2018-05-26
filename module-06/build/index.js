"use strict";

var _Hamburger$SIZES, _Hamburger$STUFFINGS, _Hamburger$TOPPINGS;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hamburger = function Hamburger(size, stuffing) {
  var _this = this;

  _classCallCheck(this, Hamburger);

  this.addTopping = function (topping) {
    _this.toppings.push(topping);
  };

  this.removeTopping = function (topping) {
    _this.toppings.filter(function (topping) {
      return _this.toppings[topping] !== topping;
    });
  };

  this.getToppings = function () {
    return _this.toppings;
  };

  this.getSize = function () {
    return _this.size;
  };

  this.getStuffing = function () {
    return _this.stuffing;
  };

  this.calculatePrice = function () {
    var sizePrice = Hamburger.SIZES[_this.size].price;
    var stuffingPrice = Hamburger.STUFFINGS[_this.stuffing].price;
    var toppingPrice = Hamburger.TOPPINGS[_this.topping].price;
    var totalPrice = sizePrice + stuffingPrice + toppingPrice;
    return totalPrice;
  };

  this.calculateCalories = function () {
    var sizeCalories = Hamburger.SIZES[_this.size].calories;
    var stuffingCalories = Hamburger.STUFFINGS[_this.stuffing].calories;
    var toppingCalories = Hamburger.TOPPINGS[_this.topping].calories;
    var totalCalories = sizeCalories + stuffingCalories + toppingCalories;
    return totalCalories;
  };

  this.size = size;
  this.stuffing = stuffing;
  this.toppings = [];
};

Hamburger.SIZE_SMALL = "SIZE_SMALL";
Hamburger.SIZE_LARGE = "SIZE_LARGE";
Hamburger.SIZES = (_Hamburger$SIZES = {}, _defineProperty(_Hamburger$SIZES, undefined.SIZE_SMALL, {
  price: 30,
  calories: 50
}), _defineProperty(_Hamburger$SIZES, undefined.SIZE_LARGE, {
  price: 50,
  calories: 100
}), _Hamburger$SIZES);
Hamburger.STUFFING_CHEESE = "STUFFING_CHEESE";
Hamburger.STUFFING_SALAD = "STUFFING_SALAD";
Hamburger.STUFFING_MEAT = "STUFFING_MEAT";
Hamburger.STUFFINGS = (_Hamburger$STUFFINGS = {}, _defineProperty(_Hamburger$STUFFINGS, undefined.STUFFING_CHEESE, {
  price: 15,
  calories: 20
}), _defineProperty(_Hamburger$STUFFINGS, undefined.STUFFING_SALAD, {
  price: 20,
  calories: 5
}), _defineProperty(_Hamburger$STUFFINGS, undefined.STUFFING_MEAT, {
  price: 35,
  calories: 15
}), _Hamburger$STUFFINGS);
Hamburger.TOPPING_SPICE = "TOPPING_SPICE";
Hamburger.TOPPING_SAUCE = "TOPPING_SAUCE";
Hamburger.TOPPINGS = (_Hamburger$TOPPINGS = {}, _defineProperty(_Hamburger$TOPPINGS, undefined.TOPPING_SPICE, {
  price: 10,
  calories: 0
}), _defineProperty(_Hamburger$TOPPINGS, undefined.TOPPING_SAUCE, {
  price: 15,
  calories: 5
}), _Hamburger$TOPPINGS);


var hamburger2 = new Hamburger({
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