interface Drivable{
    start():string;
    drive():string;
    getPosition():string;
}
class Car implements Drivable{
    start():string{
        return "I am start method";
    }
    drive():string{
        return "I am drive method";
    }
    getPosition():string{
        return "I am getPosition method";
    }
}
let car = new Car();
console.log(car.drive);
console.log(car.start);
console.log(car.getPosition);