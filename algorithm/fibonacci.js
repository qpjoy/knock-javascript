function getFibonacci(n) {
	let a = 0;
	let b = 1;
	let c = 0;
	if (n < 2) {
		return n;
	}

	for (let i = 2; i <= n; i++) {
		c = a + b;
		a = b;
		b = c;
		// let temp = a;
		// a = b;
		// b = c;
		// c = temp + a;
	}
	return c;
}

console.log(getFibonacci(6));

function fib(n) {
	if(n<2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}

console.log(fib(0));