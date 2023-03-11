function removeDuplicates(array) {
	if (!Array.isArray(array)) {
		console.error(`array expected, ${typeof array} provided`);
		return;
	}

	return [...new Set(array)];
}

module.exports = { removeDuplicates };
