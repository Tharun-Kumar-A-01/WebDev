function add() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var res = num1 + num2;
	document.getElementById("result").textContent = res;
	console.log(res);
}

function subtract() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var res = num1 - num2;
	document.getElementById("result").textContent = res;
	console.log(res);
}

function multiply() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var res = num1 * num2;
	document.getElementById("result").textContent = res;
	console.log(res);
}

function divide() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var res = num1 / num2;
	document.getElementById("result").textContent = res;
	console.log(res);
}

function modulus() {
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	var res = num1 % num2;
	document.getElementById("result").textContent = res;
	console.log(res);
}
 