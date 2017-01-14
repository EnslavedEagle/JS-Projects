import { UIElement } from './class.UIElement.js';
import { Button } from './UI/Button.js';
import { Text } from './UI/Text.js';
import { NumberField } from './UI/NumberField.js';

export class UIHandler {
	constructor() {
		// All used UI elements
		this.buttons = {
			start: new Button('play', 'btn--green', 'Play!'),
			higher: new Button('higher', 'btn--green', 'Higher!'),
			lower: new Button('lower', 'btn--red', 'Lower!'),
			correct: new Button('correct', 'btn--blue', 'Correct!'),
			restart: new Button('restart', 'btn--red', 'Restart!')
		};
		this.text = {
			intro: new Text('Let\'s play a number guessing game.'),
			inGame: new Text('Is your number...'),
			impossible: new Text('This game is impossible!'),
			win: new Text('So I finally won the game! Thanks for playing with me. :)')
		};
		this.numberField = new NumberField("numberField", "number");

		// What is rendered on particular stages
		this.mainMenu = {
			game__content: [this.text.intro],
			game__buttons: [this.buttons.start]
		};
		this.gamePlay = {
			game__content: [this.text.inGame, this.numberField],
			game__buttons: [this.buttons.higher, this.buttons.correct, this.buttons.lower]
		};
		this.Impossible = {
			game__content: [this.text.impossible],
			game__buttons: [this.buttons.restart]
		}
		this.Win = {
			game__content: [this.text.win],
			game__buttons: [this.buttons.restart]
		}
	}
	clear() {
		console.log('Clearing game');
		document.getElementsByClassName('game__content')[0].innerHTML = '';
		document.getElementsByClassName('game__buttons')[0].innerHTML = '';
	}
	render(gameStatus) {
		this.clear();
		for(let x in this[gameStatus]) {
			console.log(this[gameStatus][x]);
			this[gameStatus][x].forEach((element) => {
				if(element.render)
					element.render(x);
			});
		}
	}
	renderNumber(number) {
		this.numberField.element.innerText = number + '?';
	}
}