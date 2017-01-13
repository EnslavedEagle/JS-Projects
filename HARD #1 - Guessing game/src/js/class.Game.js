import { UIHandler } from './class.UIHandler.js';

export class Game {
	constructor() {
		this.status = 'stopped';
		this.lastNumber = 0;
		this.currentNumber = 0;
		this.numbersGuessed = [];

		this.maxNumber = 100;
	}
	init() {
		var UI = new UIHandler;
		UI.render();
	}
	getRandomNumber() {
		return Math.floor(Math.random() * this.maxNumber) + 1;
	}
}