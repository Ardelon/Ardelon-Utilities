function measurePerformance(name, fn, ...args) {
	if (typeof fn !== "function") {
		console.error(`Provide a valid function, ${typeof fn} provided`);
		return;
	}
	console.time(name);
	fn.bind(this, ...args);
	console.timeEnd(name);
}

module.exports = { measurePerformance };
// Example Usage

// function multiply(a, b) {
//   return a * b;
// }
// measurePerformance('Multiply method', multiply, 7, 10);
