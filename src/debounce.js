function debounce(fn, wait, immediate) {
	let timeout;
	return function setDebounce(...args) {
		const later = () => {
			timeout = null;
			if (!immediate) {
				fn.apply(this, args);
			}
		};

		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait || 200);

		if (callNow) {
			fn.apply(this, args);
		}
	};
}

module.exports = { debounce };
// debounce(() => {}, 500, true); Example Usage
