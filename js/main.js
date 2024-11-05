// Завдання 1: Вивести result в консоль та перевірити тип змінної result ⬇️
let result = 5 + 5 + '5';
console.log(result); 
console.log(typeof result); 

// Завдання 2: Перевірка змінної email на наявність "@" і підрахунок загальної кількості символів ⬇️
let email = "vselvesuk@gmail.com";
if (email.includes("@")) {
    console.log("Email містить символ '@'");
}
console.log("Загальна кількість символів у email:", email.length);

// Завдання 3: Поєднати слова у fullName та додати "Viktor" ⬇️
let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = `${word1} ${word2} ${word3} Viktor`;
console.log(fullName); 

// Завдання 4: Виведення повідомлення для користувача з шаблонним рядком ⬇️
let userName = "Олександро";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
