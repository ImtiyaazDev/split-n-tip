/**
 * 
 * @param {string} string 
 * @returns a formatted string with the first letter capitalised
 */

export const capitaliseFirstLetter = (string) =>
	string.charAt(0).toUpperCase() + string.slice(1);
