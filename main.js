/* 
2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined. 
*/

/*
alert("task CONVERTER");
const USD_COEFFICIENT = 0.025;
const EUR_COEFFICIENT = 0.030;
const OIL_COEFFICIENT = 1150;
const GOLD_COEFFICIENT = 1775.23;


const USER_MONEY = +prompt("Введіть Вашу суму грошей (у грн.):");
if (USER_MONEY) {
        let userIndex = +prompt("Що купляємо: | ДОЛАРИ-1 | ЄВРО-2 | НАФТУ-3 | ЗОЛОТО-4 |");
        switch (userIndex){
            case 1: {
                let resultOperation = USER_MONEY* USD_COEFFICIENT;
                alert(` Ви отримаєте ${resultOperation} доларів. Очікуте! `)
                break;
            }

            case 2: {
                let resultOperation = USER_MONEY * EUR_COEFFICIENT;
                alert(` Ви отримаєте ${resultOperation} євро. Очікуте! `)
                break;
            }

            case 3: {
                let resultOperation = USER_MONEY / OIL_COEFFICIENT;
                alert(` Ви отримаєте ${resultOperation} bbl нафти. Підставляйте каністру! `)
                break;
            }

            case 4: {
                let resultOperation = USER_MONEY / GOLD_COEFFICIENT;
                alert(` Ви отримаєте ${resultOperation} гр. золота`)
                break;
            }
            default: (alert("Ви вибрали неправильне значення"))
        }

} else {alert("Ви ввели невірне значення")}
*/


/* 
3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 
*/
alert("task SHOPPING");
const ONE_PERCENT = 0.01;
const FIVE_PERCENT = 0.05;
const TEN_PERCENT = 0.10;
const GIFT_CERTIFICATE = 200;
let result;

const userCart = +prompt("Введіть суму вашого замовлення:");
if (userCart && userCart < 500) {
        result = userCart - (userCart*ONE_PERCENT);
        alert (` Вітаємо! До оплати ${result} грн. `);
    } else if (userCart > 1000) {
        result = userCart - (userCart*TEN_PERCENT);
        alert (` Вітаємо! До оплати ${result} грн. а також Ви отримуєте подарунковий сертифікат на ${GIFT_CERTIFICATE} грн. `);
    } else {
        result = userCart - (userCart*FIVE_PERCENT);
        alert (` Вітаємо! До оплати ${result} грн. `);
    }


