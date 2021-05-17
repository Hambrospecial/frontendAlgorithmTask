// Converting Fahrenheit To Celsius
function convertFahrToCelsius(num){
	if (Number(num)) {
		var result = ((num - 32) * 5/9).toFixed(4);
	} else if (num instanceof Array) {
		 result = `${JSON.stringify(num)} is not a valid number but a/an array`;
		} else {
		result = `${JSON.stringify(num)} is not a valid number but a/an ${typeof num}`;
	}
	return ("`" + result + "`");
}
console.log(convertFahrToCelsius("60"));


//A function of replacement of Multiple 2, 3, 5 with Yu, Gi, Oh respectively

function checkYuGiOh(n) {
	if(isNaN(Number(n))) {
		return "`" + `invalid parameter: ${n}` + "`";
	} else {
		function YuGiOh(number) {
			let result = "";
			if(number % 2 === 0) {
				result += "yu";
			} else if (number % 3 === 0) {
				result = (result) ? result + "-" + "gi" : "gi";
			} else if (number % 5 === 0) {
				result = (result) ? result + "-" + "oh" : "oh";
			} 
			return (result) ? result : number;
		}
	}

	let newArr = [ ];
	let new_n = parseInt(n);

	for (let number = 1; number <= new_n; number++) {
		newArr.push(YuGiOh(number));
	}
	return newArr;
}

console.log(checkYuGiOh("ho"));