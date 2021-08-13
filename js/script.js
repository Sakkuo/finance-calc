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
  allExpens: function () {
    var size = Object.keys(appData.expVal).length;
    var allEx = 0;
    for (let i = 0; i < size; i++) {
      allEx += appData.expVal[i];
    }
    appData.allExpens = allEx;
  },
  бюджет: money,
  expenses: {},
  expVal: [],
  income: [],
  saving: false,
  optionalExpenses: {},
  chooseExpenses: function () {
    let numb = +prompt("Количество статей обязательных расходов");
    for (let i = 0; i < numb; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = +prompt("Во сколько обойдется?");
      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != ""
      ) {
        appData.expenses[a] = b;
        appData.expVal.push(b);
      }
    }
  },
  detectDayBudjet: function () {
    var moneyPD = Number(((money - allEx) / 30).toFixed(1));
    if (moneyPD <= 0) {
      moneyPD = 0.0;
      alert("Ваш бюджет 0.0₽ на день, нужно зарабатывать больше ");
    } else {
      alert("Ваш бюджет на 1 день: " + moneyPD + "₽");
    }
  },
  chooseIncome: function () {
    let items = prompt(
      "Что принесёт дополнительный доход? (Перечислите через запятую)",
      ""
    );
    if (typeof a !== "string" && typeof items == null && items == "") {
      let items = prompt(
        "Что принесёт дополнительный доход? (Перечислите через запятую)",
        ""
      );
    }
    appData.income = items.split(", ");
    appData.income.push(prompt("Может еще что-то?"));
    appData.income.sort();
    this.income.forEach(function (item, i, arr) {
      alert("Способы доп. заработка № " + (i + 1) + ": " + item);
    });
  },
  moneyPerDay: function () {
    ((money - allEx) / 30).toFixed(1);
  },
};

appData.time = time;
