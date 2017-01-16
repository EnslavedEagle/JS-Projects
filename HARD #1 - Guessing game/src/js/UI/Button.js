import { UIElement } from '../class.UIElement.js';

export class Button extends UIElement {
	constructor(id, className, text) {
		super();
		this.element = document.createElement('button');
		this.element.innerText = text;
		this.element.setAttribute('id', id);
		this.element.classList.add('btn', className);
	}
	event(event, callback) {
		this.element.addEventListener(event, callback);
	}
}