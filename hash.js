
// Shared values outside of functions, which could 
// obviously be housed in a class. This is considered 
// outside the scope of this exercise

/** @constant {integer} base - Base integer used for . */
const base = 7;
const letters = "acdfgilmnoprstuw";

/**
 * Resolve the limit of the hash function. May be privatized as class method.
 *
 * @return {integer} limit - Maximum limit for hashing functionality.
 */
function limit() {
	return base + letters.length;
}

/**
 * Hashes a string.
 *
 * @param {string} message - String to hash.
 * @return {integer} hash - The hash(digest) of the message.
 */
function hash(message) {
	var hash = base;
	for(var i = 0; i < message.length; i++) {
		hash = (hash * limit() + letters.indexOf(message[i]));
	}
	return hash;
}

/**
 * Unhashes a string.
 *
 * @param {integer} hash - Hash to unhash.
 * @return {string} message - String used to create hash.
 */
function unhash(hash) {
	var message = "";
	while(hash != base) {
		var index = hash % limit;
		message = letters[index] + message;
		hash = (hash - index) / limit;
	}
	return message;
}



// solution
let solution = unhash(292681030017238);

// assertions
console.assert(hash(solution) == 292681030017238);
console.assert(hash('tortilla') == 593846452632);
console.assert("tortilla" == unhash(hash("tortilla")));

