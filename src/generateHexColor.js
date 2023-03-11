const generateHexColor = () => {
	const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

	let hexColorRep = "#";

	for (let index = 0; index < 6; index++) {
		const randomPosition = Math.floor(Math.random() * hexCharacters.length);
		hexColorRep += hexCharacters[randomPosition];
	}

	console.log(hexColorRep);
	return hexColorRep;
};

module.exports = { generateHexColor };
