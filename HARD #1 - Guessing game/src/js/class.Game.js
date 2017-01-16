import { UIHandler } from './class.UIHandler.js';

export class Game {
	constructor() {
		this.status = 'mainMenu';
		this.lastNumber = 0;
		this.currentNumber = 0;
		this.numbersGuessed = [];

		this.minNumber = 0;
		this.maxNumber = 100;

		this.UI = new UIHandler;
	}
	init() {
		var _this = this;
		this.setStatus('mainMenu');
		this.UI.buttons['start'].event("click", (() => _this.startGame()));
		this.UI.buttons['higher'].event("click", (() => _this.checkAnswer('higher')));
		this.UI.buttons['lower'].event("click", (() => _this.checkAnswer('lower')));
		this.UI.buttons['correct'].event("click", (() => _this.checkAnswer('correct')));
		this.UI.buttons['restart'].event("click", (() => _this.startGame()));
	}
	getStatus() {
		return this.status;
	}
	setStatus(newStatus) {
		this.status = newStatus;
		this.UI.render(this.getStatus());
	}
	startGame() {
		// restore the defaults
		this.currentNumber = 0;
		this.lastNumber = 0;
		this.numbersGuessed = [];
		this.minNumber = 0;
		this.maxNumber = 100;

		// start the game
		this.setStatus('gamePlay');
		this.generateNumber();
	}
	generateNumber() {
		this.currentNumber = this.getRandomNumber();
		this.UI.renderNumber(this.currentNumber);
	}
	checkAnswer(answer) {
		this.lastNumber = this.currentNumber;
		this.numbersGuessed.push(this.currentNumber);

		if(answer == 'higher') {
			this.minNumber = this.lastNumber;
		} else if(answer == 'lower') {
			this.maxNumber = this.lastNumber;
		} else if(answer == 'correct') {
			this.setStatus('Win');
			return true;
		}

		if(this.minNumber+1 >= this.maxNumber) {
			this.setStatus('Impossible');
			return false;
		}
		this.generateNumber();
	}
	getRandomNumber() {
		do {
			var number = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber;
		} while(this.numbersGuessed.includes(number) && this.minNumber < this.maxNumber);
		return number;
	}
}