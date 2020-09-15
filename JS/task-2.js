// Write code under this line
class User {
  // аналог функции-конструктора
  constructor(name, age, followers) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
}

User.prototype.getInfo = function () {
  return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
};

console.log(typeof User);
// 'function'

const mango = new User('Mango', 2, 20);
console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo);
// 'function'

const poly = new User('Poly', 3, 17);
console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers' // Write code under this line// 'function'// 'User Mango is 2 years old and has 20 followers'// 'function'  // 'User Poly is 3 years old and has 17 followers'

/*
Задача 5-2
class
Напиши класс User для создания пользователя со следующим свойствами:

name - строка
age - число
followers - число
Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers
*/

/*
Код должен содержать класс User - синтаксический сахар функции-коструктора
Класс User должен создавать объект
Значение свойства getInfo объекта, созданного из класса User, должно быть функцией
Объект, созданный вызовом new User('Mango', 2, 20) должен содержать свойство 'name' со значением 'Mango', свойство 'age' со значением 2 и свойство 'followers' со значением 20
Объект, созданный вызовом new User('Mango', 2, 20) при вызове метода getInfo() должен возвращать строку 'User Mango is 2 years old and has 20 followers'
Объект, созданный вызовом new User( 'Poly', 3, 17) должен содержать свойство 'name' со значением 'Poly', свойство 'age' со значением 3 и свойство 'followers' со значением 17
Объект, созданный вызовом new User( 'Poly', 3, 17) при вызове метода getInfo() должен возвращать строку 'User Poly is 3 years old and has 17 followers'
*/
