export class UIElement {
	constructor() {
		this.element;
	}
	render(target) {
		if(target) {
			var targetElement = document.getElementsByClassName(target)[0];
			if(targetElement) {
				targetElement.appendChild(this.element);
			}
		}
	}
}