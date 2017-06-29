let wantPlay = confirm("Привет! Хотите сыграть?")

if (wantPlay) {
	let name = prompt("Введите ваше имя")
	let surName = prompt("Введите вашу фамилию")
	let old = prompt("Введите ваш возраст")
	let question1 = prompt("В JS 0.1 + 0.2 == 0.3? yes/no")
	let question2 = prompt("В JS null == undefined? yes/no")
	let question3 = prompt("В JS 5 & 3 == 1? yes/no")
	let question4 = prompt("В JS 2 ** 3 == 8? yes/no")
	let question5 = prompt("В JS 2 << 2 == 8? yes/no")
	let result1 = (question1 == "yes") ? 0 : 1
	let result2 = (question2 == "yes") ? 1 : 0
	let result3 = (question3 == "yes") ? 1 : 0
	let result4 = (question4 == "yes") ? 1 : 0
	let result5 = (question5 == "yes") ? 1 : 0
	let result = result1 + result2 + result3 + result4 + result5
	let resultPoint = (result1 * 2 ** 2) + (2*result2 * 2 ** 2) + (3*result3 * 2 ** 2) + (4*result4 * 2 ** 2) + (5*result5 * 2 ** 2)
	alert(name + " вы ответили правильно на " + result + " вопроса из 5")
	alert(name + " вы набрали " + resultPoint + " очков из 60 возможных")
} else {
	alert("Конец игры")
}