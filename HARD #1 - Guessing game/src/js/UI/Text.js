import { UIElement } from '../class.UIElement.js';

export class Text extends UIElement {
	constructor(text) {
		super();
		this.element = document.createElement('p');
		this.element.innerText = text;
		this.element.classList.add('text');
	}
}