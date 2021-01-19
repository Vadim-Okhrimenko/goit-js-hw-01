let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

let order = prompt("Количество дроидов в заказе?");

if (order === null) {
  console.log("Отменено пользователем!");
} else {
    totalPrice = pricePerDroid * order;
    if (totalPrice > credits) {
      console.log("Недостаточно средств на счету!");
    } else {
      credits = credits - totalPrice;
      console.log(
        `Вы купили ${order} дроидов, на счету осталось ${credits} кредитов.`
      );
    }
  }

