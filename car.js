var Car = (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        return "I am start method";
    };
    Car.prototype.drive = function () {
        return "I am drive method";
    };
    Car.prototype.getPosition = function () {
        return "I am getPosition method";
    };
    return Car;
}());
var car = new Car();
console.log(car.drive);
console.log(car.start);
console.log(car.getPosition);
