import { Card } from './';

export class Player {

    constructor(public name = "unknown") { }

    cards: Card[] = [];
    points: number = 0;

    move(): Card[] {
        console.log(this.name);

        let card = this.cards.pop() as Card;
        if (!card) return [];

        console.log(card.toString());
        return [card];
    }

    beat(cardsToBeat: Card[]): Card[] {

        cardsToBeat.forEach(card => {

        });

        let card = this.cards.pop() as Card;
        if (!card) return [];

        console.log(card.toString());
        return [card];
    }
}

