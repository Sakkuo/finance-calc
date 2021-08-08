let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let expensTipe = prompt("Введите обязательную статью расходов в этом месяце");
let expensValue = prompt("Во сколько обойдется?");

let appData = {
  бюджет: money,
  timeData: time,
  expenses: {
    expensTipe: expensValue
  },
};

console.log(appData);
let moneyN = Number(money);
alert("Ваш бюджет на 1 день: " + (moneyN - expensValue)/30);