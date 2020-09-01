var firstName = prompt ("Як вас звати?");

document.getElementById("welcome").innerHTML = "Привіт " + firstName + ",";

var age = prompt ("Скільки вам років?");

if (age >= 18)  {
  message = "я бачу вам " + age + ", як я бачу вам вже дозволено голосувати.";
} else {
  massage = "я бачу вам " + age + ", як я бачу вам ще не дозволено голосувати.";
}

document.getElementById("age").innerHTML = message;

var profession = prompt ("Ким ви працюєте?");

document.getElementById("profession").innerHTML = "Ви працюєте " + profession + ".";

var favAuthor = prompt ("Ваш улюблений автор?");

document.getElementById("author").innerHTML = favAuthor + " це один з моїх улюблених авторів" + ".";

var fav_color = prompt ("Ваш улюблений колір?");

document.getElementById("color").innerHTML = "Я теж люблю " + fav_color + " колір" + ".";
