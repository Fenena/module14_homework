let user = prompt("Добро пожаловать! Назовите, пожалуйства, ваше имя");

let date = new Date();

var yy = date.getFullYear();
var mm = date.getMonth() + 1;
var dd = date.getDate();

var hh = date.getHours();
var min = date.getMinutes();

var time = dd + '.' + mm + '.' + yy + ' ' + hh + ':' + min;

localStorage.setItem(time, user);
const myUser = localStorage.getItem(time);
console.log(time, myUser);

if(user == myUser){
	alert('Добрый день, ' + myUser + '! Давно не виделись. В последний раз вы были у нас ' + time);
  time = time;
}
