
//2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined. 

/*
alert("task CONVERTER");
const USD_COEFFICIENT = 0.025;
const EUR_COEFFICIENT = 0.030;
const OIL_COEFFICIENT = 1150;
const GOLD_COEFFICIENT = 1775.23;


const USER_MONEY = +prompt("Введіть Вашу суму грошей (у грн.):");
if (USER_MONEY && USER_MONEY != null && USER_MONEY != undefined ) {
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









//3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 
/*
alert("task SHOPPING");
const ONE_PERCENT = 0.01;
const FIVE_PERCENT = 0.05;
const TEN_PERCENT = 0.10;
const GIFT_CERTIFICATE = 200;
let result;

const userCart = +prompt("Введіть суму вашого замовлення:");

if (userCart < 500) {
        result = userCart - (userCart*ONE_PERCENT);
        alert (` Вітаємо! До оплати ${result} грн. `);
    } else if (userCart > 1000) {
        result = userCart - (userCart*TEN_PERCENT);
        alert (` Вітаємо! До оплати ${result} грн., а також Ви отримуєте подарунковий сертифікат на ${GIFT_CERTIFICATE} грн. `);
    } else {
        result = userCart - (userCart*FIVE_PERCENT);
        alert (` Вітаємо! До оплати ${result} грн. `);
    }

*/









//4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал. 

/*
alert("QUIZ");

const Q_1 = "У якому місті знаходиться 'Промприлад.Реновація'?";//Івано-Франківськ
const Q_2 = "Місцева назва маршрутного автобуса у Івано-Франківську:";//пижик
const Q_3 = "Висота РАТУШІ у нашому місті (м.):";//50
const Q_4= "Яка довжина найкоротшої вулиці міста (м.)?";//65
const Q_5 = "Як звати викладача курсу JS+React?";//ЮЛІАН

let index = 0;
const bonus = 1;

let answ_1 = prompt(Q_1);
let answ_2 = prompt(Q_2);
let answ_3 = +prompt(Q_3);
let answ_4 = +prompt(Q_4);
let answ_5 = prompt(Q_5);

if (answ_1.toLowerCase() == "івано-франківськ") {
    index++;
}
if (answ_2.toLowerCase() == "пижик") {
    index++;
}
if (answ_3 == 50) {
    index++;
}
if (answ_4 == 65) {
    index++;
}
if (answ_5.toUpperCase() == "ЮЛІАН") {
    index++;
}

if (index < 5) {
    alert(` Ви отримали ${index} балів. `);
} else {
    alert(` Ви відповіли правильно на всі запитання, тому отримуєте додатково ${bonus} бонусний бал. Ваш підсумок ${index+bonus} балів. `);
}
*/






/*
//5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 
alert("task NUMBER");
let number = +prompt("Введіть тризначне число:");
if ( number > 99 && number < 1000 ) {
    let first = (number - (number % 100)) / 100;//1 цифра
    let third = number % 10;//3
    let second = (number - (first*100 + third)) / 10;//2

    if ( first == second || second == third || first == third ) {
        alert("У числі є однакові цифри")
    } else {
        alert("Немає однакових цифр");
    }
} else {
    alert(`   Ви ввели число неправильно`);
}

*/







//6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.
alert("task BUTTONS");
let userButton = prompt("Натисніть кнопку на клавіатурі від 1 до = ");

    switch(userButton) {
        case "1" : alert("!");
            break;
        case "2" : alert("@");
            break;
        case "3": alert("#");
            break;
        case "4" : alert("$");
            break;
        case "5" : alert("%");
            break;
        case "6" : alert("^");
            break;
        case "7" : alert("&");
            break;
        case "8" : alert("*");
            break;
        case "9" : alert("(");
            break;
        case "0" : alert(")");
            break;
        case "-" : alert("_");
            break;
        case "=" : alert("+");
            break;
    }
    