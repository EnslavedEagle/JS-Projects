import { UIElement } from '../class.UIElement.js';

export class Button extends UIElement {
	constructor(id, className, text) {
		super();
		this.element = document.createElement('button');
		this.element.innerText = text;
		this.element.setAttribute('id', id);
		this.element.classList.add('btn', className);
	}
	get() {
		return this.element;
	}
	hide() {
		this.element.setAttribute('disabled', 'disabled');
		this.element.style.display = 'none';
	}
	show() {
		this.element.removeAttribute('disabled');
		this.element.style.dsiplay = 'inline-block';
	}
	event(event, callback) {
		console.log('Adding event "' + event + '" for #' + this.element.getAttribute('id'), callback);
		this.element.addEventListener(event, callback);
	}
}