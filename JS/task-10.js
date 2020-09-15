class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }

  //   static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
  //     return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
  //   }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    return (this._price = value);
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    (this.isOn = false), (this.speed = 0);
  }

  accelerate(value) {
    //speed <= maxSpeed
    if (this.speed + value > this.maxSpeed) {
      this.speed = this.maxSpeed;
    } else this.speed += value;
  }
  decelerate(value) {
    //speed >= 0

    if (this.speed - value <= 0) {
      this.speed = 0;
    } else this.speed -= value;
  }
  drive(hours) {
    //this.hours = hours;
    if ((this.isOn = true)) this.distance += hours * this.speed;
    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000

/*
Класс Car JS должен определить как функцию-конструктор
Ожидается использование метода 'static getSpecs'
Статический метод 'static getSpecs' должен возвращать строку со свойствами и значениями объекта согласно спецификации.
Методы get и set для свойства price должны выполняться согласно спецификации.
Метод 'turnOn' должен задавать свойству 'isOn' значение 'true'.
Метод 'turnOff' должен задавать свойству 'isOn' значение 'false' и свойству 'speed' значение '0'.
Метод 'accelerate' должен добавлять к свойству 'speed' значение 'value'
Метод 'accelerate' должен оставлять свойству 'speed' значение 'maxSpeed', если значение 'value' в сумме со значением 'speed' превышают значение 'maxSpeed'.
Метод 'decelerate' должен уменьшать свойство 'speed' на значение 'value'
Метод 'decelerate' должен оставлять свойству 'speed' значение '0', если значение 'value' в сумме со значением 'speed' превышают значение '0'.
Метод 'drive' должен изменять свойство 'distance', добавляя произведение значений 'hours' и 'speed'
*/
