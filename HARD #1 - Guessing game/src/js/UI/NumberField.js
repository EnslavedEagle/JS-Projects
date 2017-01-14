import { UIElement } from '../class.UIElement.js';

export class NumberField extends UIElement {
	constructor(id, className) {
		super();
		this.element = document.createElement('div');
		this.element.classList.add(className);
		this.element.setAttribute('id', id);
	}
}