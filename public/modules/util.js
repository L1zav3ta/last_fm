/**
 * Creats new dom-element with content from params.
 * @param {*} content - added content.
 * @param {*} elemType - type of the wrapper element.
 * @param {*} className - class name for creating element.
 * @returns dom-element.
 */
export function createElementWithContent(content, elemType, className) {
	let dom = document.createElement(elemType);
	dom.className = className;
	dom.innerHTML = content;
	return dom;
};


/**
 * Fitchs data by api url.
 * @param {*} url - url for api fetch.
 * @returns fetch data.
 */
export async function fetchAPI(url) {
	const response = await fetch(url);
	const data = await response.json();
	return data;
}
