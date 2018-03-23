import { Card } from './';

export class Player {

    constructor(public name = "unknown") { }

    cards: Card[] = [];
    points: number = 0;

    move() {
        console.log(this.name);

        while (this.cards.length) {
            let card = this.cards.pop();
            this.points += card.points;

            console.log(card.toString());
        }

        console.log('Points: ' + this.points)
        console.log();
    }
}

