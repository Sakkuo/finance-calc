var money = +prompt("Ваш бюджет на месяц?");
  // time = prompt("Введите дату в формате YYYY-MM-DD");


var appData = {
  бюджет: money,
  // timeData: time,
  expenses: {},
  expVal: [],
  income: [],
  saving: false,
  optionalExpenses: {}
};


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


console.log(appData);
var allEx = 0;
for (let i = 0; i<size; i++){
  allEx += appData.expVal[i];
} 

console.log(allEx)
alert("Ваш бюджет на 1 день: " + ((money - allEx)/30).toFixed(1));
