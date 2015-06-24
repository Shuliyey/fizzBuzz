var fizzBuz = function(a) {
	if (typeof a == 'number') {
		a = Math.floor(a);
		if (a <= 0) {
			return [];
		}
		var hash = [1, 2, 'Fizz', 4, 'Buzz', 
			'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'Fizz Buzz'];
		var hash_increase = [15, 15, '', 15, '', 
							 '', 15, 15, '', '', 
							 15, '', 15, 15, ''];
		var fizz_buzz = new Array(a);
		var index = 0;
		for (var i = 0; i < Math.floor(a/15); i++) {
			for (var j = 0; j < 15; j++) {
				fizz_buzz[index++] = hash[j];
				hash[j]+=hash_increase[j];
			}
		}
		for (var j = 0; j < Math.min(15, a%15); j++) {
			fizz_buzz[index++] = hash[j];
		}
		return fizz_buzz;
	} else {
		console.log(a + "is not a number");
		return undefined;
	}
}

// Test Case
fizzBuz(10);
fizzBuz(100);
fizzBuz(1000);