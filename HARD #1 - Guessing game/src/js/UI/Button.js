import { UIElement } from '../class.UIElement.js';

export class Button extends UIElement {
	constructor(id, className, text) {
		super();
		this.element = document.createElement('button');
		this.element.innerText = text;
		this.element.setAttribute('id', id);
		this.element.classList.add('btn', className);

		this.element.addEventListener('click', (e) => console.log(e.target));
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
}