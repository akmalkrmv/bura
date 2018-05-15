import { Suit } from './';

export class Card {

    constructor(
        public suit: Suit,
        public value: number,
        public text: string,
        public points: number = 0,
        public image: string = ''
    ) { }

    toString() {
        return `${this.getUTFSuit()} ${this.text} (${this.value}, ${this.points})`;
    }

    public getUTFSuit() {
        return Card.convetToUTFSuit(this.suit);
    }

    public static convetToUTFSuit(suit: Suit) {
        switch (suit) {
            case Suit.clubs: return '♣';
            case Suit.hearts: return '♥';
            case Suit.spades: return '♠';
            case Suit.diamonds: return '♦';
        }
    }
}
