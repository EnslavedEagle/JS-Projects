import { UIElement } from './class.UIElement.js';
import { Button } from './UI/Button.js';
import { Text } from './UI/Text.js';

export class UIHandler {
	constructor() {
		this.buttons = {
			start: new Button('play', 'btn--green', 'Play!'),
			higher: new Button('higher', 'btn--green', 'Higher!'),
			lower: new Button('lower', 'btn--red', 'Lower!'),
			correct: new Button('correct', 'btn--blue', 'Correct!')
		};
		this.text = {
			intro: new Text('Let\'s play a number guessing game.'),
		};
		this.mainMenu = {
			game__content: [this.text.intro],
			game__buttons: [this.buttons.start, this.buttons.higher]
		};
	}
	render() {
		var buttonsContainer = document.getElementsByClassName('game__buttons')[0];
		for(let x in this.mainMenu) {
			this.mainMenu[x].forEach((element) => element.render(x));
		}
	}
}