let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  // while(isNaN(money) || money == "" || money == null) {
  //   money = +prompt("Ваш бюджет на месяц?");
  // }
}
start();

var appData = {
  бюджет: money,
  expenses: {},
  expVal: [],
  income: [],
  saving: false,
  optionalExpenses: {},
};

appData.time = time;
let numb = +prompt("Количество статей обязательных расходов");
for (let i=0; i<numb; i++) {
   let a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = +prompt("Во сколько обойдется?");
  if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != ''){
    appData.expenses[a] = b;
    appData.expVal.push(b);
  }
}

var size = Object.keys(appData.expVal).length;
var allEx = 0;
for (let i = 0; i<size; i++){
  allEx += appData.expVal[i];
} 
appData.allExpens = allEx;

var moneyPD = Number(((money - allEx)/30).toFixed(1));
if (moneyPD <= 0) {
  moneyPD = 0.0;
  alert("Ваш бюджет 0.0₽ на день, нужно зарабатывать больше ");
} else {
  alert("Ваш бюджет на 1 день: " + moneyPD + "₽");
}

appData.moneyPerDay = ((money - allEx)/30).toFixed(1);
console.log(appData);